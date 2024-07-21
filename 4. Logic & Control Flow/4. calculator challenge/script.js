const calculator = (num1, num2, operator) => {
  switch (true) {
    case operator === '+':
      console.log(`${num1 + num2}`);
      break;
    case operator === '-':
      console.log(`${num1 - num2}`);
      break;
    case operator === '*':
      console.log(`${num1 * num2}`);
      break;
    case operator === '/':
      console.log(`${num1 / num2}`);
      break;
    default:
      console.log('Error');
  }
};

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');
