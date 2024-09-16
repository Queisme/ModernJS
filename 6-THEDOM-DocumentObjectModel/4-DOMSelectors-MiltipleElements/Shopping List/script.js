//querySelectorAll()

const listItems = document.querySelectorAll('li');
console.log(listItems[1].innerText); //Orange Juice

// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerText = 'Oranges';
//   }
// });

const listItems2 = document.getElementsByClassName('items');

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
