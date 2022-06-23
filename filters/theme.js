module.exports = {
	name: "color/theme",
	matcher: function (token) {
	  return token.type === "color" && token.attributes.type !== "palette" || token.type === 'boxShadow'
	},
}