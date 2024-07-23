//for ([initialExpression]; [conditionExpression]; [incrementExpression])
//  statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a 'block; of code, use the `{}` syntax

// for (i = 1; i <= 10; i++) {
//   console.log(`Number: ${i}`);
// }

// console.log(i);

//nested loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//loop through an array (use forEach array instead)

const names = ['Brad', 'Sam', 'Sara', 'Que', 'John', 'Tim', 'Quinn', 'Chris'];

for (let i = 0; i < names.length; i++) {
  names[i] === 'Que'
    ? console.log(`${names[i]} is the best`)
    : console.log(names[i]);
}
