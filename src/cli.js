// Greet new user

import readlineSync from 'readline-sync';

export const helloUser = () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
