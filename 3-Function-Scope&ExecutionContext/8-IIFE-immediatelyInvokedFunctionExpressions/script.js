(function () {
  const user = 'Que';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log(`Hello ${name}`);
})('Que');

(function hello() {
  console.log('Hello');
})();
