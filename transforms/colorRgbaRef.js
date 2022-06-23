module.exports = {
	name: "color/rgbaRef",
	type: "value",
	transitive: true,
	matcher: (token) => {
		return token.type === "color";
	},
	transformer: (token) => {
		if (token.value.includes("rgba")) {
			const output = token.value.replace(/rgba\((.+?)\)/g, function (string, first) {
				const hex = first.split(',')[0]
				const opacity = first.split(',')[1]
				const rgb = Color(hex).toRgb()
				return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b},${opacity})`
			})
			return output
		} else {
			return token.value
		}
	},
}
