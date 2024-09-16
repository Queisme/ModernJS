// Values stored on the stack

const name = 'Que';
const age = 45;

// Refernece values are stored on the heap

const person = {
  name: 'Quinn',
  age: 45,
};

let newName = name;
newName = 'Jacque';

let newPerson = person;
newPerson.name = 'Quinton';

console.log(name, newName);
console.log(person, newPerson);
