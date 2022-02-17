// Present logic for 'brain-even' game

import readlineSync from 'readline-sync';
import getRndInt from './getRandomInt.js';
import isEven from './isEven.js';

export default (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    // Generate random number and check is it even
    const temp = getRndInt();
    const correctAnswer = isEven(temp);

    // Asking user a question, and get his/her answer
    console.log(`Question: ${temp}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // If he/she fails, game is over
    if (userAnswer !== correctAnswer) {
      // prettier-ignore
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
