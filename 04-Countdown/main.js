var output = document.querySelector('.output');
output.innerHTML = '';

// Solution 1 - While Loop
var i = 10;
while(i >= 0) {
  var para = document.createElement('p');
  if(i === 10) {
    para.textContent = 'Countdown ' + i;
  } else if(i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }
  output.appendChild(para);
  i--;
}

// Solution 2 - For Loop
for(var i = 10; i >= 0; i--) {
  var para = document.createElement('p');
  if(i === 10) {
    para.textContent = 'Countdown ' + i;
  } else if(i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }
  output.appendChild(para);
}