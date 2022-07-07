module.exports = {
	name: "fontFamily/fallback",
	type: "value",
	matcher: (token) => {
		return token.type === 'fontFamilies' || token.type === 'fontFamily'
	},
	transformer: (token) => {
		const serifFallback =
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
		return `'${token.value}', ${serifFallback}`;
	},
}
