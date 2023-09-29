const StyleDictionary = require("style-dictionary");
const baseConfig = require("./config.js");
const fs = require('fs-extra');
const iosPath = `dist/ios/dist/`;
const transforms = require('./transforms')
const filters = require('./filters')
const componentData = require('./tokens/base.component.json')



// Register transforms
for (const key of Object.keys(transforms)) {
  const transform = transforms[key]
  StyleDictionary.registerTransform(transform)
}

// Register filters
for (const key of Object.keys(filters)) {
  const filter = filters[key]
  StyleDictionary.registerFilter(filter)
}

StyleDictionary.registerFilter({
  name: "color/light",
  matcher: function (token) {
    return (
      token.attributes.type === "color" && token.filePath.includes('light')
    );
  },
});

const isTypographyToken = (token) => {
  const typographyCategories = [
    'heading',
    'body',
    'monospace',
    'display'
  ]

  return typographyCategories.includes(token.attributes.category)
}

const getTokenLevel = (token) => {
  if (token.filePath.includes('component')) {
    return 'component'
  }

  if (token.attributes.type === 'palette') {
    return 'reference'
  }

  if (token.filePath.includes('system')) {
    return 'system'
  }

  if (isTypographyToken(token)) {
    return 'system'
  }

  if (token.filePath.includes('theme')) {
    return 'theme'
  }

  return 'reference'


}

StyleDictionary.registerFormat(require('./formats/typographyClasses'))
StyleDictionary.registerFormat(require('./formats/nestedJsonWithCSSVars.js'))

StyleDictionary.registerFormat({
  name: `docs`,
  formatter: function (format) {
    const componentNames = Object.keys(componentData)
    const dictionary = Object.assign({}, format.dictionary);
    // Override each token's `value` with `darkValue`
    dictionary.allProperties = dictionary.allProperties.map((token) => {
      const tokenLevel = getTokenLevel(token)

      let category = token.type
      let type = token.attributes.type
  



      let refValue
      // quick fix because tokens that alias other tokens and compute values were incorrectly marked as aliases
      if (token.original.rawValue && (token.original.rawValue.startsWith('{') && token.original.rawValue.endsWith('}'))) {
        const refs = dictionary.getReferences(token.original.rawValue)[0]
        if (refs) {
          refValue = refs.name
        }
      }


      return {
        name: token.name,
        value: token.value,
        description: token.description,
        category: token.type,
        alias: refValue,
      }
    })
    // .join(',\n') + '\n}';
    return JSON.stringify(dictionary.allProperties, null, 2);

    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return dictionary
    // return StyleDictionary.format["json/flat"]({ ...format, dictionary });

    // return dictionary.allTokens.map(token => {
    //   let value = JSON.stringify(token.value);
    //   if (dictionary.usesReference(token.original.value)) {
    //     const refs = dictionary.getReferences(token.original.value);
    //     refs.forEach(ref => {
    //       value = value.replace(ref.value, function() {
    //         return `${ref.name}`;
    //       });
    //     });
    //   }
    //   return `export const ${token.name} = ${value};`
    // }).join(`\n`)
  },
});



StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: StyleDictionary.transformGroup["css"].concat([
    // "size/pxToUnitless",
    "size/pxToRem",
    // "letterSpacing/percentToEm",
    // "fontFamily/fallback",
    // "fontWeight/css",
    // "shadow/css"
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/pxToUnitless",
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "fontWeight/css",
    "shadow/css"
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/json",
  transforms: StyleDictionary.transformGroup["web"].concat([
    "size/pxToUnitless",
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "fontWeight/css",
    "shadow/css"
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/js",
  transforms: StyleDictionary.transformGroup["js"].concat([
    "size/pxToUnitless",
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "fontWeight/css",
    "shadow/css"
  ]),
});

console.log(`cleaning dist directory...`);
fs.removeSync('dist/');

const styleDictionary = StyleDictionary.extend({
  action: {
    generateColorsets: require('./actions/ios/colorsets'),
    generateFoundationColorsets: require('./actions/ios/foundationcolorsets.js'),
    createIndex: require('./actions/createIndex')
  },
  format: {
    swiftColor: require('./formats/swiftColor'),
    swiftImage: require('./formats/swiftImage'),
  },
});

const iosColors = {
  buildPath: iosPath,
  transforms: [`attribute/cti`, `colorRGB`, `name/ti/camel`],
  actions: [`generateColorsets`],
};

console.log(`\n\n🌙 Building dark mode...`);

styleDictionary.extend({
  source: [`tokens/primitives.json`],
  platforms: {
    css: {
      transformGroup: "custom/css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "primitives.css",
          format: "css/variables",
          options: {
            selector: ':where(:root)',
            showFileHeader: false,
            outputReferences: true,
          },
        },
      ]
    },
    json: {
      transformGroup: "web",
      buildPath: "dist/json/",
      files: [
        {
          format: "custom/nestedJsonWithCSSVars",
          destination: "nested.json"
        }
      ]
    },
    flat: {
      transformGroup: "web",
      buildPath: "dist/json/",
      files: [
        {
          format: "json",
          destination: "json.json",
            name: "astro"
        }
      ]
    },
    "docs": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "docs.json",
          format: "docs",
          options: {
            showFileHeader: false,
          }
        }
      ],
    }
  }
}).buildAllPlatforms()









