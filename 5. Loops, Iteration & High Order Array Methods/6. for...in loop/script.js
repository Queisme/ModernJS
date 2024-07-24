const colorObj = {
  color1: 'red',
  color2: 'orange',
  color3: 'yellow',
  color4: 'green',
  color5: 'blue',
  color6: 'indigo',
  color7: 'violet',
};

for (const key in colorObj) {
  console.log(colorObj[key], `:`, key);
}

const colorArr = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

// for (const color in colorArr) {
//   console.log(color); // 0, 1, 2, 3, 4, 5, 6
// }

for (const key in colorArr) {
  console.log(colorArr[key]); //red, orange, yellow, etc.
}
