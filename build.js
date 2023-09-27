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
      if (token.attributes.type === 'color') {
        type = token.attributes.item
      }

      const props = {
        color: ['text', 'border', 'fill', 'background'],
      }

      let component = null

      if (token.attributes.category === 'radius') {
        type = token.attributes.type
      }

      if (token.attributes.category !== 'radius' && token.type === 'borderRadius') {
        type = token.attributes.item
      }

      if (token.attributes.category !== 'borderWidth' && token.type === 'borderWidth') {
        type = token.attributes.item
      }

      if (token.type === 'boxShadow') {
        type = token.attributes.item
      }

      // account for component tokens with elements like button-icon-color-background
      if (tokenLevel === 'component') {
        if (props[token.type]) {
          const property = token.path.find(part => props[token.type].includes(part))
          if (property) {
            type = property
          }
        }

      }

      if (componentNames.includes(token.path[0])) {
        component = token.path[0]
      }

      const typographyCategories = [
        'heading',
        'body',
        'monospace',
        'display'
      ]

      if (token.type === 'fontWeight') {
        if (typographyCategories.includes(token.attributes.category)) {
          component = token.attributes.category
        }
      }


      let refValue
      if (token.original.rawValue) {

        const refs = dictionary.getReferences(token.original.rawValue)[0]
        if (refs) {
          refValue = refs.name
        }
      }


      return {
        name: token.name,
        value: token.value,
        description: token.description,
        property: type,
        category: category,
        component: component,
        referenceToken: refValue,
        tokenLevel: getTokenLevel(token)
      }
      if (token.attributes.type === "dark") {
        token.name = token.name.replace("dark-", "");
        return token;
      } else if (token.attributes.type === "light") {
        token.name = token.name.replace("light-", "");
        return token;
      } else {
        return token;
      }
    })
    // .join(',\n') + '\n}';
    return JSON.stringify(dictionary.allProperties, null, 2);
    console.log(dictionary);

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









