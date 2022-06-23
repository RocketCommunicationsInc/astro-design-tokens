module.exports = {
	name: "color/dark",
	matcher: function (token) {
	  return (
		token.attributes.type === "color" && token.filePath.includes('dark')
	  );
	},
}