const Color = require("tinycolor2");
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
module.exports = {
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