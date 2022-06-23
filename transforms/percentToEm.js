module.exports = {
	name: "letterSpacing/percentToEm",
	type: "value",
	matcher: (token) => {
		return token.type === "letterSpacing" || token.attributes.category === 'letterSpacing'
	},
	transformer: (token) => {
		const value = token.value.replace("%", "");
		const percentToEm = value / 100;
		return `${percentToEm}em`;
	},
}

