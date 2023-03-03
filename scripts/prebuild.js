const {readFile, writeFile} = require('fs/promises');

const getTokens = async()=>{
    const tokens = await readFile('./data/tokens.json','binary')
	return JSON.parse(tokens)
}

const writeTokens = async(tokens) => {
	await writeFile('./data/tokens.json', JSON.stringify(tokens, null, 4))
}



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

		tokens.reference.font = {...tokens.reference.font, ...tokens.reference[category]}
		delete tokens.reference[category]
	})
	

	writeTokens(tokens)

}

renameTypography()