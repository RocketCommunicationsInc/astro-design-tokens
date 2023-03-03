const {readFile, writeFile} = require('fs/promises');
const filePath = './tokens/base.reference.json'

const getTokens = async()=>{
    const tokens = await readFile(filePath,'binary')
	return JSON.parse(tokens)
}

const writeTokens = async(tokens) => {
	await writeFile(filePath, JSON.stringify(tokens, null, 4))
}


/**
 * Renames typography styles, ie body-body-1-... to font-body-1 because design doesn't want to change the Figma styles
 */
const renameTypography = async() => {
	const tokens = await getTokens()

	const typographyCategories = [
		'heading',
		'body',
		'monospace',
		'display',
		'control'
	]

	typographyCategories.map(category => {

		tokens.font = {...tokens.font, ...tokens[category]}
		delete tokens[category]
	})
	

	writeTokens(tokens)

}

renameTypography()