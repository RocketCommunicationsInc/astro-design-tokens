module.exports = {
  name: 'size/remToFloat',
  type: 'value',
  matcher: (token) => token.attributes.category === 'size',
  transformer: (token) => {
    return token.value * 16
  }
}