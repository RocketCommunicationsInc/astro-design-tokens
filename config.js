module.exports = {
  "source": ["tokens/*.json"],
  platforms: {
    // scss: {
    //   transformGroup: "custom/scss",
    //   buildPath: "dist/scss/",
    //   files: [
    //     {
    //       destination: "_colors-dark.scss",
    //       format: "scss/variables",
    //       filter: "color/dark",
    //     },
    //     {
    //       destination: "_colors-light.scss",
    //       format: "scss/variables",
    //       filter: "color/light",
    //     },
    //     {
    //       destination: "_colors-global.scss",
    //       format: "scss/variables",
    //       filter: "color/global",
    //     },
    //     {
    //       destination: "_variables.scss",
    //       format: "scss/variables",
    //       filter: "notColor",
    //     },
    //   ],
    // },
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
          filter: "color/dark",
          options: {
            selector: "@mixin root-variables",
            showFileHeader: true,
            outputReferences: true,
          },
        },
        {
          destination: "_colors-light.css",
          format: "css/variables",
          filter: "color/light",
          options: {
            selector: ".light-theme",
            showFileHeader: true,
            outputReferences: true,
          },
        },
        // {
        //   destination: "_colors-global.css",
        //   format: "css/variables",
        //   filter: "color/global",
        //   options: {
        //     showFileHeader: true,
        //     outputReferences: true,
        //   },
        // },
      ],
    },
    // css: {
    //   transformGroup: "custom/css",
    //   buildPath: "dist/css/",
    //   files: [
    //     {
    //       destination: "_variables.css",
    //       format: "css/variables",
    //       filter: "notColor",
    //       options: {
    //         showFileHeader: true,
    //         outputReferences: true,
    //       },
    //     },
    //     {
    //       destination: "_colors-dark.css",
    //       format: "css/variables",
    //       filter: "color/dark",
    //       options: {
    //         showFileHeader: true,
    //         outputReferences: true,
    //       },
    //     },
    //     {
    //       destination: "_colors-light.css",
    //       format: "css/variables",
    //       filter: "color/light",
    //       options: {
    //         selector: ".light-theme",
    //         showFileHeader: true,
    //         outputReferences: true,
    //       },
    //     },
    //     {
    //       destination: "_colors-global.css",
    //       format: "css/variables",
    //       filter: "color/global",
    //       options: {
    //         showFileHeader: true,
    //         outputReferences: true,
    //       },
    //     },
    //   ],
    // },

    // "json-flat": {
    //   transformGroup: "custom/json",
    //   buildPath: "dist/json/",
    //   files: [
    //     {
    //       destination: "styles.json",
    //       format: "json/flat",
    //     }
    //   ],
    // },
    // "json-nested": {
    //   transformGroup: "custom/json",
    //   buildPath: "dist/json-nested/",
    //   files: [
    //     {
    //       destination: "styles.json",
    //       format: "json/nested",
    //     }
    //   ],
    // },
    // ios: {
    //   transformGroup: "ios",
    //   buildPath: "dist/ios/",
    //   files: [
    //     {
    //       destination: "StyleDictionaryColor.h",
    //       format: "ios/colors.h",
    //       className: "StyleDictionaryColor",
    //       type: "StyleDictionaryColorName",
    //       filter: {
    //         type: "color",
    //       },
    //     },
    //     {
    //       destination: "StyleDictionaryColor.m",
    //       format: "ios/colors.m",
    //       className: "StyleDictionaryColor",
    //       type: "StyleDictionaryColorName",
    //       filter: {
    //         type: "color",
    //       },
    //     },
    //     {
    //       destination: "StyleDictionarySize.h",
    //       format: "ios/static.h",
    //       className: "StyleDictionarySize",
    //       type: "float",
    //       filter: {
    //         type: "number",
    //       },
    //     },
    //     {
    //       destination: "StyleDictionarySize.m",
    //       format: "ios/static.m",
    //       className: "StyleDictionarySize",
    //       type: "float",
    //       filter: {
    //         type: "number",
    //       },
    //     },
    //   ],
    // },
    // "ios-swift": {
    //   transformGroup: "ios-swift",
    //   buildPath: "dist/ios-swift/",
    //   files: [
    //     {
    //       destination: "StyleDictionary.swift",
    //       format: "ios-swift/class.swift",
    //       className: "StyleDictionary",
    //       filter: {},
    //     },
    //   ],
    // },
  },
};
