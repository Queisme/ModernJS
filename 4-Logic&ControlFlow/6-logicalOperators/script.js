console.log(10 > 20 && 30 > 15 && 40 > 30); //false
console.log(10 < 20 && 30 > 15 && 40 > 30); //true

console.log(10 > 20 || 30 > 15); //true
console.log(10 > 20 || 30 < 15); //false

// && - will return first falsy value or last value
let a;

a = 10 && 20; //20
a = 10 && 20 && 30; //30
a = 10 && 0 && 30; //0
a = 10 && '' && 0 && 30; //

console.log(a);

// const posts = ['Posts One', 'Post Two'];
// console.log(posts[0]);

const posts2 = [];
posts2.length > 0 && console.log(posts2[0]); //checking first to see that it's there

// || - Will return first truthy value or last value

let b;

b = 10 || 20; //10
b = 0 || 20; //20
b = 0 || null || '' || undefined; //undefined

console.log(b);

// ?? - Returns right side operand when the left is either null or undefined

let c;

c = 10 ?? 20; //10
c = null ?? 20; //20
c = undefined ?? 30; //30
c = 0 ?? 30; //0
c = '' ?? 30; //

console.log(c);
