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

StyleDictionary.registerFormat(require('./formats/typographyClasses'))

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
  source: [`tokens/base.*.json`],
  platforms: {
    scssFlatMap: {
      transformGroup: "custom/scss",
      buildPath: "dist/scss-map-flat/",
      files: [
        {
          destination: "base.reference.scss",
          format: "scss/map-flat",
          filter: (token) => token.filePath.includes('base.reference'),
          mapName: 'reference',
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.system.scss",
          format: "scss/map-flat",
          filter: (token) => token.filePath.includes('base.system'),
          mapName: 'system',
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.component.scss",
          format: "scss/map-flat",
          filter: (token) => token.filePath.includes('base.component'),
          mapName: 'component',
          options: {
            showFileHeader: false,
          }
        },
      ],
    },
    scss: {
      transformGroup: "custom/scss",
      buildPath: "dist/scss/",
      files: [
        {
          destination: "base.reference.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes('base.reference'),
          mapName: 'reference',
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.system.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes('base.system'),
          mapName: 'system',
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.component.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes('base.component'),
          mapName: 'component',
          options: {
            showFileHeader: false,
          }
        },
      ],
    },
    css: {
      actions: ['createIndex'],
      transformGroup: "custom/css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "base.reference.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes('base.reference'),
          options: {
            selector: ':where(:root)',
            showFileHeader: false,
            outputReferences: true,
          },
        },
        {
          destination: "base.system.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes('base.system'),
          options: {
            selector: ':where(:root)',
            showFileHeader: false,
            outputReferences: true,
          },
        },
        {
          destination: "base.component.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes('base.component'),
          options: {
            selector: ':where(:root)',
            showFileHeader: false,
            outputReferences: true,
          },
        }
      ]
    },
    "json-flat": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "base.reference.json",
          format: "json/flat",
          filter: (token) => token.filePath.includes('base.reference'),
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.system.json",
          format: "json/flat",
          filter: (token) => token.filePath.includes('base.system'),
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.component.json",
          format: "json/flat",
          filter: (token) => token.filePath.includes('base.component'),
          options: {
            showFileHeader: false,
          }
        }
      ],
    },
    "json-nested": {
      transformGroup: "custom/json",
      buildPath: "dist/json-nested/",
      files: [
        {
          destination: "base.reference.json",
          format: "json/nested",
          filter: (token) => token.filePath.includes('base.reference'),
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.system.json",
          format: "json/nested",
          filter: (token) => token.filePath.includes('base.system'),
          options: {
            showFileHeader: false,
          }
        },
        {
          destination: "base.component.json",
          format: "json/nested",
          filter: (token) => token.filePath.includes('base.component'),
          options: {
            showFileHeader: false,
          }
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
          options: {
            showFileHeader: false,
          }
        }
      ],
    }
  }
}).buildAllPlatforms()

console.log(`\n\n🌙 Building classes...`);

styleDictionary.extend({
  source: [
    `tokens/extra.typography.json`,
  ],

  platforms: {

    scss: {
      buildPath: "dist/css/",
      transforms: [
        "size/pxToRem",
        "size/pxToUnitless",
        "letterSpacing/percentToEm",
        "fontFamily/fallback",
        "typography/name",
        "fontWeight/css",
        "shadow/css"
      ],
      files: [
        {
          destination: `classes/typography.css`,
          format: "css/typographyClasses",
          filter: (token) => token.type === "typography",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
  }
}).buildAllPlatforms()


console.log(`☀️ Building light mode...`);

styleDictionary.extend({
  include: ['tokens/base.*.json'],
  source: ['tokens/theme/light.json'],
  platforms: {
    css: {
      transformGroup: "custom/css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "theme.light.css",
          format: "css/variables",
          filter: (token) => token.filePath.includes('light'),
          options: {
            selector: '.light-theme',
            showFileHeader: false,
            outputReferences: true,
          },
        }
      ]
    },
    scss: {
      transformGroup: "custom/scss",
      buildPath: "dist/scss/",
      files: [
        {
          destination: "theme.light.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes('light'),
          options: {
            showFileHeader: false,
          }
        }
      ],
    },
    "json-flat": {
      transformGroup: "custom/json",
      buildPath: "dist/json/",
      files: [
        {
          destination: "theme.light.json",
          format: "json/flat",
          filter: (token) => token.filePath.includes('light'),
          options: {
            showFileHeader: false,
          }
        }
      ],
    },
    "json-nested": {
      transformGroup: "custom/json",
      buildPath: "dist/json-nested/",
      files: [
        {
          destination: "theme.light.json",
          format: "json/nested",
          filter: (token) => token.filePath.includes('light'),
          options: {
            showFileHeader: false,
          }
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
          options: {
            showFileHeader: false,
          }
        }
      ]
    }
  },
})
  .buildAllPlatforms();


console.log(`☀️ Building ios light mode...`);
styleDictionary.extend({
  source: [`tokens/ios/base.json`],
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
  include: [`tokens/ios/base.json`],
  source: ['tokens/ios/light.json'],
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
