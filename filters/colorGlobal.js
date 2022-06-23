module.exports = {
	name: "color/global",
	matcher: function (token) {
	  return (
		token.type === "color" && token.attributes.type === "palette"
	  );
	},
}