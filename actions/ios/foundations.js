const fs = require('fs-extra');
const _ = require('lodash')
const { contents, darkAppearance, idiom, hcAppearance } = require('./consts');


/**
 * Remove 'palette' and add space between
 */
const formatName = (name) => {
  return `Astro UI ${_.startCase(name)}`
}
/**
 * This action will iterate over all the colors in the Style Dictionary
 * and for each one write a colorset with light and (optional) dark
 * mode versions.
 */
module.exports = {
  // This is going to run once per theme.
  do: (dictionary, platform) => {
    const assetPath = `${platform.buildPath}/AstroCoreAssets.xcassets`;
    fs.ensureDirSync(assetPath)
    fs.writeFileSync(`${assetPath}/Contents.json`, JSON.stringify(contents, null, 2));
    
    dictionary.allProperties
      // .filter(token => token.attributes.type === 'palette' && token.attributes.category === `color`)
      .filter(token => token.attributes.category === `ios`)
      .forEach(token => {
		console.log(platform);

		console.log(token.name);
        const colorsetPath = `${assetPath}/Astro Core Colors/${formatName(token.name)}.colorset`;
        fs.ensureDirSync(colorsetPath);
        
        // The colorset might already exist because Style Dictionary is run multiple
        // times with different configurations. If the colorset already exists we want
        // to modify it rather than writing over it.
        const colorset = fs.existsSync(`${colorsetPath}/Contents.json`) ?
          fs.readJsonSync(`${colorsetPath}/Contents.json`) :
          { ...contents, colors: [] }

        const color = {
          idiom,
          color: {
            'color-space': `srgb`,
            components: token.value
          }
        };
        
        if (platform.mode === `dark`) {
          color.appearances = [darkAppearance];
		  colorset.colors.push({
			idiom: 'watch',
			color: {
			  'color-space': `srgb`,
			  components: token.value
			}
		  })
        }

        if (platform.mode === `dark`) {
          color.appearances = [darkAppearance];
        }
        
        if (platform.mode === `hc`) {
          color.appearances = [hcAppearance];
        }
        
        if (platform.mode === `hcDark`) {
          color.appearances = [darkAppearance, hcAppearance];
        }
        
        colorset.colors.push(color);
        
        fs.writeFileSync(`${colorsetPath}/Contents.json`, JSON.stringify(colorset, null, 2));
      });
  },
  undo: function(dictionary, platform) {
    // no undo
  }
}