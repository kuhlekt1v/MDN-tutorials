for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  var itemName = [];
  var itemPrice = [];
	
  var split = products[i].split(":");
  itemName.push(split[0]);
  itemPrice.push(parseFloat(split[1])); 
};