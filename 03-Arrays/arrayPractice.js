var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1

var products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
                

for (var i = 0; i < products.length; i++) { // number 2 - CS
  // number 3 - CS 13 -> 18
  var itemName = [];
  var itemPrice = [];
	
  var split = products[i].split(".");
  itemName.push(split[0]);
  itemPrice.push(parseFloat(split[1])); 

  // number 4
  
  // number 5
  itemText = 0;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
