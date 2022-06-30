/** Returns tokens by file from a token. */
let getTokens = (/** @type {{ filePath: string }} */ token) => {
	/** Filepath to the current token. */
	let pathToTokens = '../' + token.filePath

	/** Whether tokens have already been made available. */
	let areTokensAvailable = pathToTokens in getTokens

	// if tokens are not available
	if (!areTokensAvailable) {
		// require the tokens
		getTokens[pathToTokens] = require(pathToTokens)
	}

	return getTokens[filePath]
}

/** Returns the font size for a given token. */
let getFontSize = (token) => {
	let tokens = getTokens(token)
	let fontSize = tokens?.[token.attributes.category]?.[token.attributes.type]?.fontSize?.value

	return fontSize
}

module.exports = {
	name: "size/pxToUnitless",
	type: "value",
	matcher: (token) => {
		return token.type === 'lineHeight'
	},
	transformer: (token) => {
		let fontSize = parseFloat(getFontSize(token))
		let lineHeight = parseFloat(token.value)

		return `calc(${lineHeight} / ${fontSize})`;
	}
}
