var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1 - CS

var products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];
                

for (var i = 0; i < products.length; i++) { // number 2 - CS
  // number 3 - CS 13 -> 16

  var split = products[i].split(":");
  var itemName = split[0];
  var itemPrice = parseFloat(split[1]);

  // number 4 - CS
  total += itemPrice

  // number 5 - CS
  itemText = itemName + " - " + "$" + itemPrice;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
