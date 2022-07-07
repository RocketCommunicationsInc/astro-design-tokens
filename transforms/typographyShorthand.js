module.exports = {
	name: 'typography/shorthand',
	type: 'value',
	transitive: true,
	matcher: token => token.type === 'typography',
	transformer: (token) => {
		const {fontWeight, fontSize, lineHeight, fontFamily} = token.original.rawValue;
		return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
	}
  }