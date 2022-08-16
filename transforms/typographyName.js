const _ = require("lodash");
module.exports = {
	name: "typography/name",
	type: "name",
	matcher: (token) => {
		// Hard coding the available categories because design doesnt want to change them.
		const typographyCategories = [
			'heading',
			'body',
			'monospace',
			'display',
			'control'
		]
		return typographyCategories.includes(token.attributes.category)
	},
	transformer: (token) => {
		return `font-${token.attributes.type}-${_.kebabCase(
			token.attributes.item
		)}`;
	},
}
