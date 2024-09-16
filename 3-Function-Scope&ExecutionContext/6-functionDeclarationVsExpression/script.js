console.log(addDollarSign(120)); //hoisting

//Function Declaration
function addDollarSign(value) {
  return `$${value}`;
}

//Function Expression

const addPlusSign = function (value) {
  return `+${value}`;
};

console.log(addPlusSign(150));
