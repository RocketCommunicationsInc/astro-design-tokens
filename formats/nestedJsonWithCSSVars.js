function minifyDictionary(obj) {
	if (typeof obj !== 'object' || Array.isArray(obj)) {
		return obj;
	}

	var toRet = {};

	if (obj.hasOwnProperty('value')) {
		return `var(--${obj.name}, ${obj.value})`
	} else {
		for (var name in obj) {
			if (obj.hasOwnProperty(name)) {
				toRet[name] = minifyDictionary(obj[name]);
			}
		}
	}
	return toRet;
}



module.exports = {
	name: "custom/nestedJsonWithCSSVars",
	formatter: function (dictionary, config) {
		return JSON.stringify(minifyDictionary(dictionary.tokens), null, 2) + '\n';

	}
}; 