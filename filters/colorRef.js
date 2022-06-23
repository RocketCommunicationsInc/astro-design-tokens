module.exports = {
	name: "color/ref",
	matcher: function (token) {
	  return token.attributes.category === "ref";
	},
}