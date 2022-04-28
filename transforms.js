
const Color = require("tinycolor2");
const _ = require("lodash");

const pxToRem = {
	name: "size/pxToRem",
	type: "value",
	matcher: (token) => {
		return token.type === "fontSizes" || token.attributes.subitem === 'fontSize' || token.type === 'fontSize'
	},
	transformer: (token) => {
		const rem = 0.0625 * token.value.replace('px','');
		return `${rem}rem`;
	}
}

const percentToEm = {
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
}


/**
 * Removes the item from Typography styles
 * --monospace-m1-fontSize -> --font-m1-fontSize
 */
const typographyName = {
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
}


const getShadowString = (isInner, shadow) => {
	const {
		blur,
		color,
		x,
		y,
		spread,
	} = shadow
	return `${isInner ? 'inset' : ''} ${x}px ${y}px ${blur}px ${spread}px ${Color(color).toRgbString()}`;
}
const shadowCss = {
	name: "shadow/css",
	matcher: (token) => {
		return token.type === "boxShadow";
	},
	transformer: (prop) => {

		const isInner = prop.attributes.item === 'inner'
		if (Array.isArray(prop.original.value)) {
			const shadowArray = prop.original.value.map(shadow => {
				return getShadowString(isInner, shadow)
			})
			return shadowArray.toString()
		} else {
			return getShadowString(isInner, prop.original.value)
		}
	},
	type: "value",
}

const fontFamilyFallback = {
	name: "fontFamily/fallback",
	type: "value",
	matcher: (token) => {
		return token.type === 'fontFamilies' || token.type === 'fontFamily'
	},
	transformer: (token) => {
		const serifFallback =
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;";
		return `'${token.value}', ${serifFallback}`;
	},
}

/**
 * Transforms resolved references using rgba
 * rgba(var(--color-black), .50) -> rgba(0,0,0,0.5)
 */
const colorRgbaRef = {
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
}

/**
 * Converts typography name 'bold' to CSS value '700'
 */
 const fontWeightCss = {
	name: "fontWeight/css",
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
      };

module.exports = {
	pxToRem, percentToEm, typographyName, shadowCss, fontFamilyFallback, colorRgbaRef, fontWeightCss
}