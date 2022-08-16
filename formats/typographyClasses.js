function convertToVariableIfNeeded(value) {
	if (value.startsWith("{") && value.endsWith("}")) {
		return `var(--${value.slice(1, -1).replace(".", "-")})`;
	}
	return value;
}
module.exports = {
	name: "css/typographyClasses",
	formatter: function (dictionary, config) {
		return (dictionary.allProperties.map((prop) => {
			return (`
				.${prop.name} {
					font-size: ${convertToVariableIfNeeded(prop.rawValue.fontSize)};
					font-family: ${convertToVariableIfNeeded(prop.rawValue.fontFamily)};
					font-weight: ${convertToVariableIfNeeded(prop.rawValue.fontWeight)};
					line-height: calc(${prop.rawValue.lineHeight} / ${prop.rawValue.fontSize});
					letter-spacing: ${convertToVariableIfNeeded(prop.rawValue.letterSpacing)};
				}
			`)
		}
		).join("\n"))
	}
}; 