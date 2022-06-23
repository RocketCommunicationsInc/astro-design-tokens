module.exports = {
	name: "notColor",
	matcher: function (token) {
	  return token.type !== "color" && token.type !== 'boxShadow'
	},
}