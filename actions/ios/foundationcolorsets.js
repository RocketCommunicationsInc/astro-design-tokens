const fs = require('fs-extra');
const _ = require('lodash')
const { contents, darkAppearance, idiom, hcAppearance } = require('./consts');


/**
 * Astro's design tokens are exported into two separate libraries--Core and Foundations.
 * Foundations are the semantic layers and have their own output asset
 */

module.exports = {
	// This is going to run once per theme.
	do: (dictionary, platform) => {
		const assetPath = `${platform.buildPath}/AstroFoundationAssets.xcassets`;
		fs.ensureDirSync(assetPath)
		fs.writeFileSync(`${assetPath}/Contents.json`, JSON.stringify(contents, null, 2));

		let allProperties = dictionary.allProperties
		allProperties = allProperties.filter(token => token.type === 'color' &&
			token.attributes.type === 'status' || token.attributes.type === 'classification'
			|| token.attributes.category === 'ios')
		allProperties
			.forEach(token => {
				let folder = 'Astro UI Colors'
				let name = `Astro UI ${_.startCase(token.name)}`
				if (token.attributes.type === 'status') {
					folder = 'Astro Status Colors'
					name = `Astro ${_.startCase(token.name)}`
				}


				if (token.attributes.type === 'classification') {
					folder = 'Astro Classification Colors'
					name = `Astro ${_.startCase(token.name)}`
				}


				const colorsetPath = `${assetPath}/${folder}/${name}.colorset`;

				/**
				 * This action will iterate over all the colors in the Style Dictionary
				 * and for each one write a colorset with light and (optional) dark
				 * mode versions.
				 */

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

					// Watch idiom is the same as dark value
					colorset.colors.push(
						{
							idiom: 'watch',
							color: {
								'color-space': `srgb`,
								components: token.value
							}
						}
					)
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
	undo: function (dictionary, platform) {
		// no undo
	}
}