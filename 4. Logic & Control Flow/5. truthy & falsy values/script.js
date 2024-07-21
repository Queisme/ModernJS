//falsy values

//NaN
//undefined
//''
//false
//0
//null

const x = [];

x ? console.log('This is truthy') : console.log('This is falsy');

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 0;

// children !== undefined
//   ? console.log(`You have ${children} children`)
//   : console.log('Please enter number of children');

!isNaN(children)
  ? console.log(`You have ${children} children`)
  : console.log('Please enter number of children');

//Checkin for empty arrays

const posts = ['Post One', 'Post Two', 'Post Three'];
const posts2 = [];

posts ? console.log('List Posts') : console.log('No posts to list');
posts2.length ? console.log('List Posts') : console.log('No posts to list');

//Checking for empty objects
const user = {
  name: 'Que',
};
const user2 = {};

user ? console.log(`${user.name} is the user.`) : console.log('No user');
Object.keys(user2).length
  ? console.log(`${user.name} is the user.`)
  : console.log('No user');

//Loose Equality (==)

console.log(false == 0); //true
console.log('' == 0); //true
console.log(null == undefined); //true
console.log(false === 0); //false
console.log('' === 0); //false
console.log(null === undefined); //false
