module.exports = {
	name: 'typography/shorthand',
	type: 'value',
	transitive: true,
	matcher: token => token.type === 'typography',
	transformer: (token) => {
	  const {value} = token
	  return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`
	}
  }