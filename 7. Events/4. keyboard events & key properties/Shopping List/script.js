const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyUp');
};

const onKeyDown = (e) => {
  // key
  console.log(e.key);

  // keyCode
  https://www.toptal.com/developers/keycode/table-of-all-keycodes


  // code
};

// itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
