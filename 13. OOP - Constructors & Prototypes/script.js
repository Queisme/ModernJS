// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   createProfile() {
//     //...
//   }

//   logout() {
//     //...
//   }
// }

// const user1 = new User('Que', 'que@gmail.com');
// user1.createProfile();

// const user2 = new User('Chris', 'chris@gmail.com');
// user2.createProfile();

// const user3 = new User('kids', 'kids@gmail.com');
// user3.createProfile();

// const rectangle = {
//   name: 'Rectangle 1',
//   width: 10,
//   length: 20,
//   area: function () {
//     return this.width * this.length;
//   },
// };

// const rectangle2 = {
//   name: 'Rectangle 2',
//   width: 5,
//   length: 40,
//   area: function () {
//     return this.width * this.length;
//   },
// };

// console.log(rectangle.area());
// console.log(rectangle2.area());

//create a blueprint to make rectangles = Constructor Function

//ex:
//const now = new Date(); // 4 things happen when we use new

// 1. A new empty object is created.
// 2. The constructor function is called with the argument that we pass in.
// 3. The 'this' keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

// function Rectangle(name, width, length) {
//   this.name = name;
//   this.width = width;
//   this.length = length;
//   this.area = function () {
//     return this.width * this.length;
//   };
// }

// const rect1 = new Rectangle('Rectangle 1', 10, 20);

// console.log(rect1.name); //Rectangle 1
// console.log(rect1.area()); //200

// const rect2 = new Rectangle('Rectangle 2', 30, 50);

// console.log(rect2.name); //Rectangle 2
// console.log(rect2.area()); //1500

// console.log(this); //window object

// function run() {
//   console.log(this);
// }

// run(); //still window object

// const strLit = 'hello';
// const strObj = new String('hello');

// console.log(strLit, typeof strLit);
// console.log(strObj, typeof strObj);

// function Rectangle(name, width, length) {
//   this.name = name;
//   this.width = width;
//   this.length = length;
//   this.area = function () {
//     return this.width * this.length;
//   };
// }

// const rect1 = new Rectangle('Rectangle 1', 20, 20);
// const rect2 = new Rectangle('Rectangle 2', 5, 30);
// const rect3 = new Rectangle('Rectangle 3', 10, 40);

// console.log(rect1.name, rect2.width, rect3.length); //Rectangle 1 5 40
// console.log(rect1['width']); //20

// // Add property
// rect1.color = 'red';

// console.log(rect1);

// rect2.perimeter = () => 2 * (rect2.width + rect2.length);

// console.log(rect2.perimeter()); //70

// console.log(rect2);

// // Delete Property
// delete rect2.perimeter;

// // Check property
// console.log(rect2);

// console.log(rect2.hasOwnProperty('color')); //false
// console.log(rect1.hasOwnProperty('color')); //true
// console.log(rect3.hasOwnProperty('color')); //false

// // Get keys
// console.log(Object.keys(rect1)); //['name', 'width', 'length', 'area', 'color']

// // Get values
// console.log(Object.values(rect2)); //['Rectangle 2', 5, 30, f]

// // Get entries
// console.log(Object.entries(rect3));
// [Array(2), Array(2), Array(2), Array(2)];

// for (let [key, value] of Object.entries(rect3)) {
//   console.log(`${key} - ${value}`);
// }

// const playerOne = {
//   name: 'tim',
//   marker: 'X',
// };

// const playerTwo = {
//   name: 'bart',
//   marker: 'O',
// };

// function printName(player) {
//   console.log(player.name);
// }

// printName(playerOne);
// printName(playerTwo);

// function gameOver(winningPlayer) {
//   console.log('Congratulations!');
//   console.log(`${winningPlayer.name} is the winner!`);
// }

// gameOver(playerOne);

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// const player1 = new Player('Chris', 'X');
// const player2 = new Player('Que', 'O');
// const player3 = new Player('Kazza', 'K');
// const player4 = new Player('Messi', 'M');
// const player5 = new Player('Blue', 'B');

// console.log(player1, player2, player3, player4, player5);
// player3.sayName();
// player5.sayName();

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     return `${this.title} ${this.author}, ${this.pages}, ${this.read}`;
//   };
// }

// const theHobbit = new Book(
//   'The Hobbit',
//   'by J.R.R. Tolkien',
//   '295 pages',
//   'not read yet'
// );

// const theLoftR = new Book(
//   'The Lord of the Rings',
//   'by J.R.R. Tolkien',
//   '669 pages',
//   'read'
// );

// console.log(theHobbit.info());
// console.log(theLoftR.info());

// console.log(Object.getPrototypeOf(player1) === Player.prototype); //true
// console.log(Object.getPrototypeOf(theHobbit) === Book.prototype); //true
// console.log(Object.getPrototypeOf(theLoftR) === Book.prototype); //true
// console.log(Object.getPrototypeOf(player4) === Book.prototype); //false

// Player.prototype.sayHello = function () {
//   console.log(`Hello! I am a player! My name is ${this.name}`);
// };

// player1.sayHello(); //Hello! I am a player! My name is Chris
// player4.sayHello(); //Hello! I am a player! My name is Messi
// player3.sayHello(); //Hello! I am a player! My name is Kazza

// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); //true

// console.log(player1.valueOf());

// function Person(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }
// Person.prototype.sayName = function () {
//   console.log(`Hello! I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }
// Player.prototype.getMarker = function () {
//   console.log(`My marker is: ${this.marker}.`);
// };

// // returns Player.pro
// console.log(Object.getPrototypeOf(Player.prototype));
// // Now make 'Player' inherit from 'Person'
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// // returns Person.pro
// console.log(Object.getPrototypeOf(Player.prototype));

// const player1 = new Player('Que', 'X');
// const player2 = new Player('Chris', 'O');

// player1.sayName(); //Hello! I'm Que!
// player2.sayName(); //Hello! I'm Chris!

// player1.getMarker(); // My marker is: X.
// player2.getMarker(); // My marker is: O.

function Rectangle(name, width, length) {
  this.name = name;
  this.width = width;
  this.length = length;
}

Rectangle.prototype.area = function () {
  return this.width * this.length;
};

Rectangle.prototype.perimeter = function () {
  return (this.width + this.length) * 2;
};

const rect = new Rectangle('Rect', 10, 10);
console.log(rect);

console.log(rect.area());
