const items = [
  'book',
  'table',
  'chair',
  'kite',
  'kitten',
  'dog',
  'whale',
  'puma',
];
const users = [
  { name: 'Que' },
  { name: 'Quinn' },
  { name: 'Chris' },
  { name: 'Henry' },
  { name: 'Chris' },
];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

//Arrays
for (const item of items) {
  console.log(item);
}

//Array of objects
for (const user of users) {
  console.log(user); //whichever you want for whatever you want displayed
  console.log(user.name);
}

//Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//Loop over maps
const map = new Map();
map.set('name', 'Que');
map.set('age', '45');

for (const [key, value] of map) {
  console.log(key, value);
}
