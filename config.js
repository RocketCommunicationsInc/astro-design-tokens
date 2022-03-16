module.exports = {
  "source": ["tokens/tokens.json", "tokens/tokens-dark.json"],
  platforms: {
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
    }
  },
};
