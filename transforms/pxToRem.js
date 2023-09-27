const remItUp = (px) => {
	return 0.0625 * px
}

module.exports = {
	name: "size/pxToRem",
	type: "value",
	transitive: true,
	matcher: (token) => {
		return ['spacing', 'fontSize', 'fontSizes'].includes(token.type)
	},
	transformer: (token) => {
		if (token.value.toString().includes('px')) {
			return `${remItUp(token.value.replace('px', ''))}rem`
		} else {
			return `${remItUp(token.value)}rem`
		}
	}
}