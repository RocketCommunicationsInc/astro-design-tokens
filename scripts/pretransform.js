var fs = require('fs').promises
const _ = require('lodash')
const traverse = require('traverse')
const chalk = require('chalk')

const parseData = async () => {
	const data = await fs.readFile('data/tokens.json')
	return JSON.parse(data)
}

const populateLightThemeDescriptions = async () => {
	let tokens = await parseData()
	const beta = tokens.dark
	const light = tokens.light


	const result = traverse(light).map(function (x) {
		if (this.key === 'value') {
			const path = this.parent.path.join('.')
			const darkToken = _.get(beta, path)
			if (darkToken) {
				if (!this.parent.node.description) {
					this.parent.node.description = darkToken.description
				}
			} else {
				throw new Error(`Missing Dark Token: ${path}`)
			}
		}
	})

	tokens.light = result

	fs.writeFile('data/tokens.json', JSON.stringify(tokens, null, 2), 'utf8', function (err) {
		if (err) return console.log(err);
	});
}

console.log(chalk.bgBlue.underline('Fixing Descriptions...'))
populateLightThemeDescriptions()