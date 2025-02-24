module.exports = {
  name: 'colorPreserveHex',
  type: `value`,
  transitive: true,
  matcher: (token) => token.type === `color`,
  transformer: (token) => {
    // preserves 8 digit hex values that were being forced back to 6
    if (token.original.value.length === 9) {
        return token.original.value
    } else {
        return token.value
    }
  }
}