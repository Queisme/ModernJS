function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   //item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Pfft!';
  //   }
  lis.forEach((item, index) => {
    index === 1 ? (item.innerHTML = 'Second Item') : (item.innerHTML = 'Pfft!');
  });
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');
  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();

function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
//removeFirstItem();
//removeItem(1);
//removeItem2(1);
//removeItem3(2);
removeItem4(2);
