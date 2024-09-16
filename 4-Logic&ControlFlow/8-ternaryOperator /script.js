const age = 18;

// Using an if statement

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You cannot vote.');
}

//Using a ternary operator

age >= 21 ? console.log('You can drink!') : console.log('You cannot drink!');

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(canVote); //true
console.log(canVote2); //You can vote

// Multiple statements

const auth = true; //if we're logged in or not
//const auth = false;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the dashboard'), '/dashboard')
//   : (alert('Access Denied'), '/login');

// console.log(redirect);

//auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
