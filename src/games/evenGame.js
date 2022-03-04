// Logic for brain-even game

import index from '../index.js';
import helloUser from '../cli.js';
import getRandomInt from '../getRandomInt.js';
import isEven from '../isEven.js';

export default () => {
  const userName = helloUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const correctAnswer = isEven(question);
    const [userAnswer, result] = index(question, correctAnswer);
    if (!result) {
      return console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
