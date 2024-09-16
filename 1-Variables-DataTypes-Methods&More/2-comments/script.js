// This is a single line of code;  ctrl + /

/* 
This 
is
multiple
lines
of
code
*/

console.log(100);

console.log('hello world');

console.log(20, 'hello', false);

const x = 100;

console.log(x);

console.error('Alert');
console.warn('Warning');

console.table({ name: 'Que', email: 'queiskey@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello', styles);
