function convertToVariableIfNeeded(value) {
	if (value.startsWith("{") && value.endsWith("}")) {
		return `var(--${value.slice(1, -1).replace(".", "-")})`;
	}
	return value;
}
module.exports = {
	name: "css/typographyClasses",
	formatter: (dictionary, config) => (dictionary.allProperties.map((prop) => (`
	.${prop.name} {
		font: var(--${prop.name});
		letter-spacing: ${convertToVariableIfNeeded(prop.original.value.letterSpacing)};
		text-transform: ${convertToVariableIfNeeded(prop.original.value.textCase)};
		text-decoration: ${convertToVariableIfNeeded(prop.original.value.textDecoration)};
	}`)).join("\n"))
};