function sayHello() {
  console.log('Hello World');
}

sayHello(); //invoking a function

function add(num1, num2) {
  //num1 & num2 prameters
  console.log(num1 + num2);
}

add(9, 4); //these are arguments

function subtract(num1, num2) {
  return num1 - num2;
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
