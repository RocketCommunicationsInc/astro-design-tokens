/**
 * Transforms font weight names ('normal') to CSS value ('400')
 */
const fontWeightMap = {
	thin: 100,
	extralight: 200,
	ultralight: 200,
	extraleicht: 200,
	light: 300,
	leicht: 300,
	normal: 400,
	regular: 400,
	buch: 400,
	medium: 500,
	kraeftig: 500,
	kräftig: 500,
	semibold: 600,
	demibold: 600,
	halbfett: 600,
	bold: 700,
	dreiviertelfett: 700,
	extrabold: 800,
	ultabold: 800,
	fett: 800,
	black: 900,
	heavy: 900,
	super: 900,
	extrafett: 900,
};

function transformFontWeights(value) {
	const mapped = fontWeightMap[value.toLowerCase()];
	return `${mapped}`;
}

module.exports = {
	name: "fontWeight/css",
	type: "value",
	transitive: true,
	matcher: (token) => token.type === "fontWeight",
	transformer: (token) => transformFontWeights(token.value),
};
