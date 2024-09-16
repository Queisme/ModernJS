// const arr = [1, 4, 9, 16];

// const map1 = arr.map((x) => x * 2);
// console.log(map1); //[2, 8, 18, 32]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubledNum = numbers.map((number) => number * 2);

// console.log(doubledNum); //[2,4,6,8,10,12,14,16,18,20]

// //Same with forEach()

// const doubleNum2 = [];
// numbers.forEach((number) => {
//   doubleNum2.push(number * 2);
// });

// console.log(doubleNum2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//Create an array of company names

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

//Create an array of objects that has company & category

// const companyCat = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category,
//   };
// });
// console.log(companyCat);

//Create an array of objects with the name of the company and the length of each company in years

// const companyLength = companies.map((company) => {
//   return {
//     name: company.name,
//     length: company.end - company.start + ' years',
//   };
// });
// console.log(companyLength);

//Chain map methods

// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers
//   .map(function (number) {
//     return Math.sqrt(number);
//   })
//   .map(function (sqrt) {
//     return sqrt * 2;
//   })
//   .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
//   });

// console.log(squareAndDouble);
// console.log(squareAndDouble2);

//Chaining different methods

const evenNums = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenNums);
