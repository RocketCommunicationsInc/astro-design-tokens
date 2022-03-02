var fs = require('fs')
fs.readFile('tokens/tokens.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/fontWeights/g, 'fontWeight');
  // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

  fs.writeFile('tokens/tokens.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

fs.readFile('tokens/tokens-light.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/fontWeights/g, 'fontWeight');
  // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

  fs.writeFile('tokens/tokens-light.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

fs.readFile('tokens/tokens-dark.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/fontWeights/g, 'fontWeight');
  // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

  fs.writeFile('tokens/tokens-dark.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});