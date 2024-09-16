// while loop

//for loops for when you know the number of times you want the loop to run.
//while loops for when the number of times the loop will run is unknown.

// let i = 1;

// while (i <= 20) {
//   console.log(`Number: ${i}`);
//   i++;
// }

//Loop over arrays

// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting while loops

// while (i <= 5) {
//   console.log(`Number: ${i}`);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

//do while loops - block of code always runs at least once
let i = 1;

do {
  console.log(`Number: ${i}`);
  i++;
} while (i <= 0); //Number: 1
