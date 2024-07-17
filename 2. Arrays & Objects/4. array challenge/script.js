const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// arr2.shift();
// const arr3 = arr1.concat(arr2);

// arr1.pop();
// const arr3 = [...arr1, ...arr2];

const arr3 = arr1.slice(0, 4).concat(arr2);
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr3);
console.log(arr4);
