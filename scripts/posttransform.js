var fs = require('fs').promises
const chalk = require('chalk')
const parseLight = async () => {
	try {
		const data = await fs.readFile('tokens/tokens.light.json', 'utf8')
		return data
	} catch (e) {
		console.log(chalk.bgRed(`Could not get light tokens: ${e}`));
	}
}

const parseDark = async () => {
	try {
		const data = await fs.readFile('tokens/tokens.json', 'utf8')
		return data
	} catch (e) {
		console.log(chalk.bgRed(`Could not get dark tokens: ${e}`));
	}
}

const renameFontWeights = async () => {
	const lightTokens = await parseLight()
	const darkTokens = await parseDark()

	const lightResult = lightTokens.replace(/fontWeights/g, 'fontWeight');
	fs.writeFile('tokens/tokens.light.json', lightResult, 'utf8', function (err) {
		if (err) return console.log(err);
	});

	const darkResult = darkTokens.replace(/fontWeights/g, 'fontWeight');
	fs.writeFile('tokens/tokens.json', darkResult, 'utf8', function (err) {
		if (err) return console.log(err);
	});

}

console.log(chalk.bgBlue.underline('Renaming FontWeights to FontWeight...'))
renameFontWeights()