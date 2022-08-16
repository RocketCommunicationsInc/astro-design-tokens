module.exports = {
	name: "size/pxToRem",
	type: "value",
	transitive: true,
	matcher: (token) => {
		return ['spacing', 'fontSize', 'fontSizes', 'lineHeights'].includes(token.type)
	},
	transformer: (token) => {
		if (token.value.includes('px')) {
			const rem = 0.0625 * token.value.replace('px','');
			return `${rem}rem`;
		} else {
			return token.value
		}
	}
}