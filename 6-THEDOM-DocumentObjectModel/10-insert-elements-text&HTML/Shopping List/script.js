//insertAdjacentElement Example
function insertAdjacentElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insert Adjacent Element';

  filter.insertAdjacentElement('beforebegin', h1);
}

//insertAdjacentText Example
function insertAdjacentText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

//insertAdjacentHTML Example
function insertAdjacentHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

//insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertAdjacentElement();
insertAdjacentText();
insertAdjacentHTML();
insertBeforeItem();

/*
<!--beforebegin-->
<p>
  <!--afterbegin-->
  foo
  <!--beforeend-->
</p>
<!--afterend-->
*/
