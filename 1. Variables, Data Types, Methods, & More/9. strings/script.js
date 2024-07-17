let x;

const name = 'Que';
const age = 45;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template Literals (Template Strings)
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods

const s = 'Hello World';

x = typeof s; // string

x = s.length; // 11

// Access value by key
x = s[0]; // H
x = s[1]; // e
x = s[2]; // l
x = s[-1]; // undefined

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('H'); // 0
x = s.indexOf('e'); // 1
x = s.indexOf('d'); // 10

x = s.substring(0, 4); // Hell
x = s.substring(0, 5); // Hello
x = s.substring(1, 5); // ello
x = s.substring(2, 5); // llo

x = s.substring(7); // orld

x = s.slice(0, 4); // Hell
x = s.slice(-1); // d
x = s.slice(-11); // Hello World
x = s.slice(-6, -11); //
x = s.slice(-11, -6); // Hello

x = s.slice(0); // Hello World
x = s[0]; // H
x = s.slice(1); // ello World

x = '              Hello World';
x = s.trim(); // removes whitespace

x = s.replace('World', 'Que'); // Hello Que

x = s.includes('Hello'); // true
x = s.includes('Hell'); // true
x = s.includes('Helli'); // false

x = s.valueOf(); // Hello World

x = s.split(); // ['Hello World']
x = s.split(' '); // (2)['Hello', 'World']
x = s.split(''); // (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

console.log(x);
