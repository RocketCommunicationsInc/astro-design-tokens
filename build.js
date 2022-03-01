const StyleDictionary = require("style-dictionary");
const baseConfig = require("./config.js");
var _ = require("lodash");
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;
var Color = require("tinycolor2");

StyleDictionary.registerTransform({
  name: "size/pxToRem",
  type: "value",
  matcher: (token) => {
    return token.attributes.type === "fontSize" || token.attributes.subitem === 'fontSize'
    // return token.unit === "pixel" && token.value !== 0;
  },
  transformer: (token) => {
    const rem = 0.0625 * token.value;
    return `${rem}rem`;
    // return `${token.value}px`;
  },
});

StyleDictionary.registerTransform({
  name: "letterSpacing/percentToEm",
  type: "value",
  matcher: (token) => {
    return token.attributes.type === "letterSpacing" || token.attributes.category === 'letterSpacing'
  },
  transformer: (token) => {
    const value = token.value.replace("%", "");
    const percentToEm = value / 100;
    return `${percentToEm}em`;
  },
});

/**
 * Removes the item from Typography styles
 * --monospace-monospace-m1-fontSize -> --font-m1-fontSize
 */
StyleDictionary.registerTransform({
  name: "typography/name",
  type: "name",
  matcher: (token) => {
    return token.attributes.category === token.attributes.type;
  },
  transformer: (token) => {
    return `font-${token.attributes.item}-${_.kebabCase(
      token.attributes.subitem
    )}`;
  },
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
    return token.attributes.subitem === "fontFamily" || token.attributes.category === 'fontFamily'
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
    return token.attributes.category === "color";
  },
  transformer: (token) => {
    if (token.value.includes("rgba")) {
      const output = token.value.replace(/rgba\((.+?)\)/g, function(string, first){
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
 * Remove -dark- or -light- from the token name.
 * **TEMPORARY** until we can get design to use separate token themes.
 */
StyleDictionary.registerTransform({
  name: "color/themeName",
  type: "name",
  matcher: (token) => {
    return token.attributes.category === "color"
  },
  transformer: (token) => {
    if (token.attributes.type === "dark") {
      return token.name.replace("dark-", "");
    } else if (token.attributes.type === "light") {
      return token.name.replace("light-", "");
    } else {
      return token.name
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
    console.log('token', token);
    return token.attributes.subitem === "fontWeight" || token.type === 'fontWeight'
  },
  transformer: (token) => {
    const fontWeightValues = {
      thin: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 800,
    };
    return fontWeightValues[token.value];
  },
});

StyleDictionary.registerFilter({
  name: "notColor",
  matcher: function (token) {
    return token.attributes.category !== "color";
  },
});

StyleDictionary.registerFilter({
  name: "color/global",
  matcher: function (token) {
    return (
      token.attributes.type === "color"
    );
  },
});

StyleDictionary.registerFilter({
  name: "color/dark",
  matcher: function (token) {
    return (
      token.attributes.category === "color" && token.attributes.type === "dark"
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
      token.attributes.category === "color" && token.attributes.type === "light"
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
    "color/themeName",
    "fontWeight/cssValue",
    // "color/rgbaRef",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "color/themeName",
    "fontFamily/fallback",
    "typography/name",
    "borderRadius/name",
    "fontWeight/cssValue",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/json",
  transforms: StyleDictionary.transformGroup["web"].concat([
    "size/pxToRem",
    "letterSpacing/percentToEm",
    "fontFamily/fallback",
    "typography/name",
    "borderRadius/name",
    // "color/rgbaRef",
  ]),
});

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

StyleDictionaryExtended.buildAllPlatforms();
