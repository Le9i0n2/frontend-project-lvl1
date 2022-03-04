// Logic for brain-prime game

import index1 from '../index1.js';
import helloUser from '../cli.js';
import getRandomInt from '../getRandomInt.js';
import isPrime from '../isPrime.js';

export default () => {
  const userName = helloUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(2, 100);
    const correctAnswer = isPrime(question);
    const [userAnswer, result] = index1(userName, question, correctAnswer);
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
