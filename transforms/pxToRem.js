module.exports = {
	name: "size/pxToRem",
	type: "value",
	matcher: (token) => {
		return token.type === 'spacing' || token.type === "fontSizes" || token.attributes.subitem === 'fontSize' || token.type === 'fontSize'
	},
	transformer: (token) => {
		console.log(token.value);
		const rem = 0.0625 * token.value.replace('px','');
		return `${rem}rem`;
	}
}