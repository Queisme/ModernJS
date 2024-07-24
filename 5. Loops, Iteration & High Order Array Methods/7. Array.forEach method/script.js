//forEach() loops through

// const arr = ['a', 'b', 'c'];

// arr.forEach((element) => console.log(element));
//a
//b
//c

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'Threads'];

//console.log(socials.__proto__);

// socials.forEach((social, index, poo) =>
//   console.log(`${social} - ${index}`, poo)
// );

const logSocials = (items) => console.log(items);

//socials.forEach(logSocials);
//Twitter
//LinkedIn
//Facebook
//Instagram
//Threads

const socialObjs = [
  {
    name: 'Twitter',
    url: 'https://twitter.com',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
  },
  {
    name: 'Threads',
    url: 'https://threads.com',
  },
];

socialObjs.forEach((item) => console.log(item.url));
