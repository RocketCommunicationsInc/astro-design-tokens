const fs = require("fs");
const data = require("./dist/json/styles.json");

function splitJson(tokens) {
  //Loop thru the data and fill in the category objs.
  let colors = {};
  let fontSize = {};
  let fontWeight = {};
  let fontFamily = {};
  let letterSpacing = {};
  let lineHeight = {};
  let global = {};
  let pariahs = {};
  for (const [key, value] of Object.entries(tokens)) {
    // console.log(key);
    // console.log(value);
    if (key.includes("color-d")) {
      colors[key] = value;
    } else if (key.includes("color-l")) {
      colors[key] = value;
    } else if (key.includes("color-w")) {
      colors[key] = value;
    } else if (key.includes("font-size")) {
      fontSize[key] = value;
    } else if (key.includes("font-weight")) {
      fontWeight[key] = value;
    } else if (key.includes("spacing")) {
      letterSpacing[key] = value;
    } else if (key.includes("family")) {
      fontFamily[key] = value;
    } else if (key.includes("line-height")) {
      lineHeight[key] = value;
    } else if (key.includes("color-global")) {
      global[key] = value;
    } else {
      pariahs[key] = value;
    }
  }
  writeJson("colors", colors);
  writeJson("fontSize", fontSize);
  writeJson("fontFamily", fontFamily);
  writeJson("fontWeight", fontWeight);
  writeJson("letterSpacing", letterSpacing);
  writeJson("lineHeight", lineHeight);
  writeJson("global", global);

  //Check that all tokens were written correctly
  const OGSize = Object.keys(tokens).length;
  console.log("OG Size: ", OGSize);
  const colorSize = Object.keys(colors).length;
  const fontSizeSize = Object.keys(fontSize).length;
  const fontWeightSize = Object.keys(fontWeight).length;
  const lineHeightSize = Object.keys(lineHeight).length;
  const letterSpacingSize = Object.keys(letterSpacing).length;
  const globalSize = Object.keys(global).length;
  const fontFamilySize = Object.keys(fontFamily).length;
  const total =
    colorSize +
    fontSizeSize +
    fontWeightSize +
    lineHeightSize +
    letterSpacingSize +
    fontFamilySize +
    globalSize;
  console.log("Total written: ", total);
  if (OGSize != total) {
    console.log("Sizes are different! Here are the outliers: ");
    console.log(pariahs);
  }
}

function writeJson(fileName, obj) {
  fs.writeFileSync(
    `./dist/json/${fileName}.json`,
    JSON.stringify(obj, null, 2),
    "utf-8"
  );
}

splitJson(data);
