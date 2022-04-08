const StyleDictionary = require("style-dictionary");
const baseConfig = require("./config.js");
var _ = require("lodash");
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;
var Color = require("tinycolor2");



StyleDictionary.registerTransform({
  name: "size/pxToRem",
  type: "value",
  matcher: (token) => {
    return token.type === "fontSizes" || token.attributes.subitem === 'fontSize' || token.type === 'fontSize'
  },
  transformer: (token) => {
    const rem = 0.0625 * token.value;
    return `${rem}rem`;
  },
});

StyleDictionary.registerTransform({
  name: "letterSpacing/percentToEm",
  type: "value",
  matcher: (token) => {
    return token.type === "letterSpacing" || token.attributes.category === 'letterSpacing'
  },
  transformer: (token) => {
    const value = token.value.replace("%", "");
    const percentToEm = value / 100;
    return `${percentToEm}em`;
  },
});

/**
 * Removes the item from Typography styles
 * --monospace-m1-fontSize -> --font-m1-fontSize
 */
StyleDictionary.registerTransform({
  name: "typography/name",
  type: "name",
  matcher: (token) => {
    // Hard coding the available categories because design doesnt want to change them.
    const typographyCategories = [
      'heading',
      'body',
      'monospace',
      'display'
    ]
    return typographyCategories.includes(token.attributes.category)
  },
  transformer: (token) => {
    return `font-${token.attributes.type}-${_.kebabCase(
      token.attributes.item
    )}`;
  },
});

const toPx = (value) =>
  StyleDictionary.transform["size/remToPx"].transformer({ value });

const shadowMatcher = (prop) => {
  return prop.type === "boxShadow";
}

const webShadowTransformer = (prop) => {
  if (Array.isArray(prop.original.value)) {
    const isInner = prop.attributes.item === 'inner'

    const newVal = prop.original.value.map(shadow => {
      const {
        blur,
        color,
        x,
        y,
        spread,
      } = shadow
      return `${isInner ? 'inset' : ''} ${x}px ${y}px ${blur}px ${spread}px ${Color(color).toRgbString()}`;
    })
    return newVal.toString()
  } else {

    const {
      blur,
      color,
      x,
      y,
      spread,
    } = prop.original.value;

    const isInner = prop.attributes.item === 'inner'
    return `${isInner ? 'inset' : ''} ${x}px ${y}px ${blur}px ${spread}px ${Color(color).toRgbString()}`;
  }
};

StyleDictionary.registerTransform({
  name: "shadow/css",
  matcher: shadowMatcher,
  transformer: webShadowTransformer,
  type: "value",
});

StyleDictionary.registerTransform({
  name: "borderRadius/name",
  type: "name",
  matcher: (token) => {
    return token.attributes.category === "border-radius";
  },
  transformer: (token) => {
    return `${token.attributes.category}-${token.attributes.type}`;
  },
});

StyleDictionary.registerTransform({
  name: "fontFamily/fallback",
  type: "value",
  matcher: (token) => {
    return token.attributes.subitem === "fontFamily" || token.attributes.category === 'fontFamily' || token.type === 'fontFamily'
  },
  transformer: (token) => {
    const serifFallback =
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;";
    const monoFallback = "monospace";
    if (token.attributes.type === "mono") {
      return `'${token.value}', ${monoFallback}`;
    } else {
      return `'${token.value}', ${serifFallback}`;
    }
  },
});

/**
 * Transforms resolved references using rgba
 * rgba(var(--color-black), .50) -> rgba(0,0,0,0.5)
 */
StyleDictionary.registerTransform({
  name: "color/rgbaRef",
  type: "value",
  transitive: true,
  matcher: (token) => {
    return token.type === "color";
  },
  transformer: (token) => {
    if (token.value.includes("rgba")) {
      const output = token.value.replace(/rgba\((.+?)\)/g, function (string, first) {
        const hex = first.split(',')[0]
        const opacity = first.split(',')[1]
        const rgb = Color(hex).toRgb()
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b},${opacity})`
      })

      return output
    } else {
      return token.value
    }
  },
});

/**
 * Converts typography name 'bold' to CSS value '700'
 */
StyleDictionary.registerTransform({
  name: "fontWeight/cssValue",
  type: "value",
  matcher: (token) => {
    return token.type === 'fontWeight'
  },
  transformer: (token) => {
    const fontWeightValues = {
      Thin: 200,
      Light: 300,
      Regular: 400,
      Medium: 500,
      Semibold: 600,
      Bold: 700,
      Black: 800,
    };
    return fontWeightValues[token.value];
  },
});

StyleDictionary.registerFilter({
  name: "notColor",
  matcher: function (token) {
    return token.type !== "color" && token.type !== 'boxShadow'
  },
});

StyleDictionary.registerFilter({
  name: "color/theme",
  matcher: function (token) {
    return token.type === "color" && token.attributes.type !== "palette" || token.type === 'boxShadow'
  },
});

StyleDictionary.registerFilter({
  name: "color/ref",
  matcher: function (token) {
    return token.attributes.category === "ref";
  },
});

StyleDictionary.registerFilter({
  name: "color/global",
  matcher: function (token) {
    return (
      token.type === "color" && token.attributes.type === "palette"
    );
  },
});

StyleDictionary.registerFilter({
  name: "color/dark",
  matcher: function (token) {
    return (
      token.attributes.type === "color" && token.filePath.includes('dark')
    );
  },
});

StyleDictionary.registerFilter({
  name: "color/sys",
  matcher: function (token) {
    return (
      token.attributes.category === "sys" && token.attributes.type === "color"
    );
  },
});

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

StyleDictionary.registerFilter({
  name: "typography/props",
  matcher: function (token) {
    if (token.attributes.category === "font") {
      const validProps = [
        "fontSize",
        "letterSpacing",
        "fontWeight",
        "fontFamily",
      ];
      return validProps.includes(token.attributes.subitem);
    }

    if (token.attributes.category === "border-radius") {
      const validProps = ["radius"];
      return validProps.includes(token.attributes.item);
    }

    return token;
  },
});

StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: StyleDictionary.transformGroup["css"].concat([
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "typography/name",
    "borderRadius/name",
    // "color/themeName",
    "fontWeight/cssValue",
    "shadow/css"
    // "color/rgbaRef",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/pxToRem",
    "letterSpacing/percentToEm",
    // "color/themeName",
    "fontFamily/fallback",
    "typography/name",
    "borderRadius/name",
    "fontWeight/cssValue",
    "shadow/css"
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/json",
  transforms: StyleDictionary.transformGroup["web"].concat([
    "shadow/css",
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "typography/name",
    "borderRadius/name",
    "fontWeight/cssValue",
  
    // "color/rgbaRef",
  ]),
});

// StyleDictionary.extend({
//   "source": ["tokens/tokens-light.json"],
//   platforms: {
//     internal: {
//       transformGroup: "custom/css",
//       buildPath: "dist/internal/css/",
//       files: [
//         {
//           destination: "_colors-light.css",
//           format: "css/variables",
//           options: {
//             selector: ".light-theme",
//             showFileHeader: true,
//             outputReferences: true,
//           },
//         },
//       ],
//     }
//   },
// }).buildAllPlatforms()

// StyleDictionary.extend(baseConfig).buildAllPlatforms()

// const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

// StyleDictionaryExtended.buildAllPlatforms();

const modes = [`light`, `dark`];

// light/default mode
StyleDictionary.extend({
  source: [
    // this is saying find any files in the tokens folder
    // that does not have .dark or .light, but ends in .json5
    `tokens/**/!(*.${modes.join(`|*.`)}).json`
  ],
  platforms: {
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
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-dark.css",
          format: "css/variables",
          filter: "color/theme",
          options: {
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-global.css",
          format: "css/variables",
          filter: "color/theme",
          options: {
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
  },
  // ...
}).buildAllPlatforms()

StyleDictionary.extend({
  include: [
    // this is the same as the source in light/default above
    `tokens/**/!(*.${modes.join(`|*.`)}).json`
  ],
  source: [
    // Kind of the opposite of above, this will find any files
    // that have the file extension .dark.json5
    `tokens/**/*.light.json`
  ],
  platforms: {
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
