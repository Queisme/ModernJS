// function add(a, b) {
//   return a + b;
// }

//Arrow Function
const add = (a, b) => {
  return a + b;
};

//Implicit Return

const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

//Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

// Arrow function in a callback //callback is when you haqve a function inside another function
numbers.forEach((n) => console.log(n));

console.log(add(1, 2)); //3
console.log(subtract(1, 2)); //-1
console.log(double(10)); //20
console.log(createObj());
