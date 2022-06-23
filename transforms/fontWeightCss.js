module.exports = {
	name: "fontWeight/css",
	type: "value",
	matcher: (token) => {
	  return token.type === 'fontWeight'
	},
	transformer: (token) => {
	  const fontWeightValues = {
	    Thin: 200,
	    Light: 300,
	    Regular: 400,
	    Medium: 500,
	    Semibold: 600,
	    Bold: 700,
	    Black: 800,
	  };
	  return fontWeightValues[token.value];
	},
      };
