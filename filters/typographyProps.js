
module.exports = {
	name: "typography/props",
	matcher: function (token) {
	  if (token.attributes.category === "font") {
		const validProps = [
		  "fontSize",
		  "letterSpacing",
		  "fontWeight",
		  "fontFamily",
		];
		return validProps.includes(token.attributes.subitem);
	  }
  
	  if (token.attributes.category === "border-radius") {
		const validProps = ["radius"];
		return validProps.includes(token.attributes.item);
	  }
  
	  return token;
	}
}