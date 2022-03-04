// Logic for brain-gcd game

import index from '../index.js';
import helloUser from '../cli.js';
import getRandomInt from '../getRandomInt.js';
import getNumsWithCD from '../getNumsWithCD.js';
import getGCD from '../getGCD.js';

export default () => {
  const userName = helloUser();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    // Generate two random nums with at least one common divisor
    const commonDivisor = getRandomInt(1, 5);
    const num1 = getNumsWithCD(commonDivisor);
    const num2 = getNumsWithCD(commonDivisor);
    const question = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2);
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
