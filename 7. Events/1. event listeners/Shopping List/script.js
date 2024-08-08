//Don't put the listener into the html as an attribute, security risk, not flexible

//you could use a JavaScript event Listener

// clearBTN.onclick = () => alert('Clear Items');

// RECOMMENDED: Use addEventListener method

//difference between using arrow functions and regulat functions -- can't use name of function is using an arrow function -- use regular functions is you have to do the same function over and over then just use the function name

// const clearBtn = document.querySelector('#clear');

// clearBtn.addEventListener('click', () => alert('this house is clear'));

// clearBtn.addEventListener('click', onClear);

// function onClear() {
//   console.log("Cleared 'em");
// }

//if you are going to use .removeChild() or .remove() you need to use .removeEventListener first

//setTimeout(); //- asynchronous javascript function

//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000); //uses milliseconds

//setTimeout(() => clearBtn.click(), 5000);

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', onClear);

// 1 possible way

// function onClear() {
//   const itemList = document.querySelector('ul');

//   itemList.innerHTML = '';
// }

// 2nd possible way

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');
//   items.forEach((item) => item.remove());
// }

// 3rd possible way
function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}
