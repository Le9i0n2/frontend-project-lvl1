// Logic for brain-calc game

import index1 from '../index1.js';
import helloUser from '../cli.js';
import getRandomInt from '../getRandomInt.js';
import getRandomMathSign from '../getRandomMathSign.js';
import calcMap from '../calcMap.js';

export default () => {
  const userName = helloUser();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    // Generate 2 random nums and random math sign for question
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 10);
    const sign = getRandomMathSign();
    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = calcMap[sign](num1, num2);
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
