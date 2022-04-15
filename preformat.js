var fs = require('fs').promises
const _ = require('lodash')

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

let light = {}

const parseLight = async() => {
  const data = await fs.readFile('tokens/tokens.light.json')
  return JSON.parse(data)
}

const parseDark = async() => {
  const data = await fs.readFile('tokens/tokens.json')
  return JSON.parse(data)
}


const init = async() => {
  let light = await parseLight()
  let dark = await parseDark()

const data =  _.defaultsDeep(light, dark)
console.log('data', data);

fs.writeFile('tokens/test.json', JSON.stringify(data), 'utf8', function (err) {
  if (err) return console.log(err);
});


}


init()

fs.readFile('tokens/tokens.light.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/fontWeights/g, 'fontWeight');
  light = result
  // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

  fs.writeFile('tokens/tokens.light.json', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
console.log('light', light);

// fs.readFile('tokens/tokens-dark.json', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace(/fontWeights/g, 'fontWeight');
//   // .replace(/}"/g, '.value}"').replace(/}, /g, '.value}, ');

//   fs.writeFile('tokens/tokens-dark.json', result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
// });