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





StyleDictionary.registerTransformGroup({
  name: "custom/json",
  transforms: StyleDictionary.transformGroup["web"].concat([
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
    generateColorsets: require('./actions/ios/foundations')
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
    `ios/tokens/ios.json`
  ],

  platforms: {
    iosColors: Object.assign(iosColors, {
      mode: `dark`,
	  library: 'foo'
    }),
  }
}).buildAllPlatforms()

console.log(`☀️ Building light mode...`);
styleDictionary.extend({
  include: [
    // this is the same as the source in light/default above
    `ios/tokens/ios-light.json`
  ],
  source: [
    // Kind of the opposite of above, this will find any files
    // that have the file extension .dark.json5
    `tokens/**/*.light.json`
  ],
  platforms: {
      iosColors: Object.assign(iosColors, {
      mode: `light`
    }),
  }
})
  .buildAllPlatforms();
