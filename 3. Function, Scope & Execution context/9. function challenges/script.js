//Convert F to C = (Ftemp - 32) * 5/9
//Convert C to F = (9/5)Ctemp + 32

// function getCelsius(temp) {
//   celsius = (temp - 32) * 0.56;
//   console.log(celsius);
// }

const getCelsius = (temp) => ((temp - 32) * 5) / 9;

console.log(`The temperature is: ${getCelsius(50).toFixed(2)} \xB0C.`);

// Challenge 2

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Challenge 3

// (function area(len, wid) {
//   console.log(
//     `The area of a rectangle with a length of ${len} and a width of ${wid} is ${
//       len * wid
//     }`
//   );
// })(10, 5);

((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);
