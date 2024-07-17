// Step 1

const library = [
  {
    title: 'Whatever',
    author: 'Some Guy',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Boo',
    author: 'Some Gal',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Last One',
    author: 'Some one',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

// Step 3

const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
