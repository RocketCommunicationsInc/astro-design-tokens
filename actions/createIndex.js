const fs = require('fs-extra');

module.exports = {
	do: (dictionary, config) => {
		const files = config.files.map(file => `@import "${file.destination}";`)

		fs.writeFile(`${config.buildPath}/index.css`, files.join('\n'), err => {
			if (err) {
				console.error(err);
			}
		});
	},

	undo: (dictionary, config) => {
		fs.removeSync(`${config.buildPath}/index.css`)
	}
}