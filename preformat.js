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

fs.readFile('tokens/ztokens-light.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/fontWeights/g, 'fontWeight');
  // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

  fs.writeFile('tokens/ztokens-light.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

fs.readFile('tokens/ztokens-dark.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/fontWeights/g, 'fontWeight');
  // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

  fs.writeFile('tokens/ztokens-dark.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});