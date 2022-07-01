const StyleDictionary = require("style-dictionary");
const baseConfig = require("./config.js");
const fs = require('fs-extra');
const iosPath = `dist/ios/dist/`;
const transforms = require('./transforms')
const filters = require('./filters')

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

StyleDictionary.registerFormat({
  name: `darkColorFormatterSass`,
  formatter: function (format) {
    const dictionary = Object.assign({}, format.dictionary);
    // Override each token's `value` with `darkValue`
    dictionary.allProperties = dictionary.allProperties.map((token) => {
      if (token.attributes.type === "dark") {
        token.name = token.name.replace("dark-", "");
        return token;
      } else if (token.attributes.type === "light") {
        token.name = token.name.replace("light-", "");
        return token;
      } else {
        return token;
      }
    });

    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return StyleDictionary.format["scss/variables"]({ ...format, dictionary });

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

const isTypographyToken = (token) => {
  const typographyCategories = [
    'heading',
    'body',
    'monospace',
    'display'
  ]

  return typographyCategories.includes(token.attributes.category)
}

const getComponent = (token) => {
  let component = null
  if (token.attributes.category !== 'radius' && token.type === 'borderRadius') {
    component = token.attributes.category
  }
  if (token.attributes.category !== 'color' && token.type === 'color') {
    component = token.attributes.category
  }

  if (token.type === 'boxShadow') {
    component = token.attributes.category
  }

  return component
}

const getTokenLevel = (token) => {
  if (getComponent(token)) {
    return 'component'
  }

  if (token.attributes.type === 'palette') {
    return 'reference'
  }

  if (token.original.rawValue && typeof token.original.rawValue !== 'object' && token.original.rawValue.includes('.')) {
    return 'system'
  }

  if (isTypographyToken(token)) {
    return 'system'
  }

  return 'reference'


}

StyleDictionary.registerFormat({
  name: `docs`,
  formatter: function (format) {
    const dictionary = Object.assign({}, format.dictionary);
    // Override each token's `value` with `darkValue`
    dictionary.allProperties = dictionary.allProperties.map((token) => {
      const test = getTokenLevel(token)
      if (!test) {
        console.log(token);
      }

      let category = token.type
      let type = token.attributes.type
      if (token.attributes.type === 'color') {
        type = token.attributes.item
      }
      let component = null
      if (token.attributes.category !== 'color' && token.type === 'color') {
        component = token.attributes.category
      }


      if (token.attributes.category === 'radius') {
        type = token.attributes.type
      }

      if (token.attributes.category !== 'radius' && token.type === 'borderRadius') {
        component = token.attributes.category
        type = token.attributes.item
      }

      if (token.attributes.category !== 'borderWidth' && token.type === 'borderWidth') {
        component = token.attributes.category
        type = token.attributes.item
      }

      if (token.type === 'boxShadow') {
        component = token.attributes.category
        type = token.attributes.item
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

StyleDictionary.registerFormat({
  name: `darkColorFormatter`,
  formatter: function (format) {
    const dictionary = Object.assign({}, format.dictionary);
    // Override each token's `value` with `darkValue`
    dictionary.allProperties = dictionary.allProperties.map((token) => {
      if (token.attributes.type === "dark") {
        token.name = token.name.replace("dark-", "");
        return token;
      } else if (token.attributes.type === "light") {
        token.name = token.name.replace("light-", "");
        return token;
      } else {
        return token;
      }
    });

    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return StyleDictionary.format["css/variables"]({ ...format, dictionary });

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
    "size/pxToUnitless",
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "typography/name",
    "fontWeight/css",
    "shadow/css"
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/pxToUnitless",
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "typography/name",
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
    "typography/name",
    "fontWeight/css",
    "shadow/css"
  ]),
});

// before this runs we should clean the directories we are generating files in
// to make sure they are ✨clean✨
console.log(`cleaning ${iosPath}...`);
fs.removeSync(iosPath);


const styleDictionary = StyleDictionary.extend({
  // custom actions
  action: {
    generateColorsets: require('./actions/ios/colorsets'),
    generateFoundationColorsets: require('./actions/ios/foundationcolorsets.js'),
  },
  format: {
    swiftColor: require('./formats/swiftColor'),
    swiftImage: require('./formats/swiftImage'),
  },
});

const modes = [`light`, `dark`];

const iosColors = {
  buildPath: iosPath,
  transforms: [`attribute/cti`,`colorRGB`,`name/ti/camel`],
  actions: [`generateColorsets`],
};

console.log(`\n\n🌙 Building dark mode...`);

styleDictionary.extend({
  source: [
    // this is saying find any files in the tokens folder
    // that does not have .dark or .light, but ends in .json5
    `tokens/tokens.json`
  ],

  platforms: {
    // iosColors: Object.assign(iosColors, {
    //   mode: `dark`,
    //   library: 'core'
    // }),
    scss: {
      transformGroup: "custom/scss",
      buildPath: "dist/scss/",
      files: [
        {
          destination: "_colors-dark.scss",
          format: "scss/variables",
          filter: "color/theme",
        },
        {
          destination: "_colors-global.scss",
          format: "scss/variables",
          filter: "color/global",
        },
        {
          destination: "_variables.scss",
          format: "scss/variables",
          filter: "notColor",
        },
      ],
    },
    internal: {
      transformGroup: "custom/css",
      buildPath: "dist/internal/css/",
      files: [
        {
          destination: "_tokens.scss",
          format: "css/variables",
          filter: "notColor",
          options: {
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-dark.scss",
          format: "css/variables",
          filter: "color/theme",
          options: {
            selector: "@mixin root-variables",
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-global.css",
          format: "css/variables",
          filter: "color/global",
          options: {
            showFileHeader: true,
            outputReferences: true,
          },
        },
      ],
    },
    css: {
      transformGroup: "custom/css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          filter: "notColor",
          options: {
            selector: ':where(:root)',
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-dark.css",
          format: "css/variables",
          filter: "color/theme",
          options: {
            selector: ':where(:root)',
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-global.css",
          format: "css/variables",
          filter: "color/global",
          options: {
            selector: ':where(:root)',
            showFileHeader: true,
            outputReferences: true,
          },
        },
      ],
    },
    "json-flat": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "styles.json",
          format: "json/flat",
        }
      ],
    },
    "json-nested": {
      transformGroup: "custom/json",
      buildPath: "dist/json-nested/",
      files: [
        {
          destination: "styles.json",
          format: "json/nested",
        }
      ],
    },
    "docs": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "docs.json",
          format: "docs",
        }
      ],
    }
  }
}).buildAllPlatforms()

console.log(`☀️ Building light mode...`);
styleDictionary.extend({
  include: [
    'tokens/tokens.json'
  ],
  source: [
    // Kind of the opposite of above, this will find any files
    // that have the file extension .dark.json5
    'tokens/tokens.light.json'
  ],
  platforms: {
    //   iosColors: Object.assign(iosColors, {
    //   mode: `light`,
    //   library: 'core'
    // }),
    scss: {
      transformGroup: "custom/scss",
      buildPath: "dist/scss/",
      files: [
        {
          destination: "_colors-light.scss",
          format: "scss/variables",
          filter: "color/theme",
        }
      ],
    },
    internal: {
      transformGroup: "custom/css",
      buildPath: "dist/internal/css/",
      files: [
        {
          destination: "_colors-light.css",
          format: "css/variables",
          filter: "color/theme",
          options: {
            selector: ".light-theme",
            showFileHeader: true,
            outputReferences: true,
          }
        }
      ],
    },
    css: {
      transformGroup: "custom/css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "_colors-light.css",
          format: "css/variables",
          filter: "color/theme",
          options: {
            selector: ".light-theme",
            showFileHeader: true,
            outputReferences: true,
          }
        }
      ],
    },
    "json-flat": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "styles.json",
          format: "json/flat",
        }
      ],
    },
    "json-nested": {
      transformGroup: "custom/json",
      buildPath: "dist/json-nested/",
      files: [
        {
          destination: "styles.json",
          format: "json/nested",
        }
      ],
    },
    "docs": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "docs-light.json",
          format: "docs",
        }
      ]
    }
  },
})
  .buildAllPlatforms();


  console.log(`☀️ Building ios light mode...`);
  styleDictionary.extend({
    source: [
      // this is saying find any files in the tokens folder
      // that does not have .dark or .light, but ends in .json5
      `tokens/ios.json`
    ],
  
    platforms: {
      iosColors: Object.assign({}, {
        ...iosColors,
        mode: `dark`,
        library: 'core'
      }),
      iosColorsFoundation: Object.assign({}, {
        ...iosColors,
        actions: ['generateFoundationColorsets'],
        mode: `dark`,
        library: 'foundation'
      }),


    }
  }).buildAllPlatforms()
  

  console.log(`☀️ Building ios dark mode...`);
  styleDictionary.extend({
    include: [
      // this is the same as the source in light/default above
      `tokens/ios.json`
    ],
    source: [
      // Kind of the opposite of above, this will find any files
      // that have the file extension .dark.json5
      'tokens/ios-light.json'
    ],
    platforms: {
      iosColors: Object.assign({}, {
        ...iosColors,
        mode: `light`,
        library: 'core'
      }),
      iosColorsFoundation: Object.assign({}, {
        ...iosColors,
        actions: ['generateFoundationColorsets'],
        mode: `light`,
        library: 'foundation'
      }),

    }
  })
    .buildAllPlatforms();
  