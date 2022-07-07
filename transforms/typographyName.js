/**
 * Appends 'font-' prefix and removes duplicate category name 
 * caused by how design wants their Typography styles to be named in Figma
 * ie: heading-heading-1 -> font-heading-1
 */
module.exports = {
	name: "typography/name",
	type: "name",
	matcher: (token) => {
		return token.type === 'typography'
	},
	transformer: (token) => {
		return `font-${token.attributes.type}`;
	},
}
