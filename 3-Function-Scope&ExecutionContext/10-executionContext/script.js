// Execution Context Phases

//Memory Creation Phase:
//Create the global object (browser = window, Node.js = global)
//Create the 'this' object and bind it to the global object
//Setup memory heap for storing variables and function references
//Store functions and variables in global execution context and set to 'undefined'

//Execution Phase:
//Execute code line by line
//Create a new execution context for each function call

let x = 100;
let y = 50;
function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum;
}
let sum1 = getsum(x, y);
let sum2 = getSum(10, 5);
