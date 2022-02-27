/** Provides a map of games that can give game start phrase,
 * game random question and correct answer for it
 * */

import getRnd from './getRandomInt.js';
import isEven from './isEven.js';
import getRndSign from './getRandomMathSign.js';
import calcMap from './calcMap.js';
import getNumsWithCD from './getNumsWithCD.js';
import getGCD from './getGCD.js';
import getRandomProgression from './getRandomProgression.js';
import isPrime from './isPrime.js';

const games = {
  'brain-even': {
    'start-phrase': () => {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    },
    'question-and-answer': () => {
      const question = getRnd();
      const answer = isEven(question);
      return [question, answer];
    },
  },
  'brain-calc': {
    'start-phrase': () => {
      console.log('What is the result of the expression?');
    },
    'question-and-answer': () => {
      const num1 = getRnd(1, 50);
      const num2 = getRnd(1, 10);
      const sign = getRndSign();
      const question = `${num1} ${sign} ${num2}`;
      const answer = calcMap[sign](num1, num2);
      return [question, answer];
    },
  },
  'brain-gcd': {
    'start-phrase': () => {
      console.log('Find the greatest common divisor of given numbers.');
    },
    'question-and-answer': () => {
      const commonDivisor = getRnd(1, 5);
      const num1 = getNumsWithCD(commonDivisor);
      const num2 = getNumsWithCD(commonDivisor);
      const question = `${num1} ${num2}`;
      const answer = getGCD(num1, num2);
      return [question, answer];
    },
  },
  'brain-progression': {
    'start-phrase': () => {
      console.log('What number is missing in the progression?');
    },
    'question-and-answer': () => {
      const progression = getRandomProgression();
      const randomElementID = getRnd(0, progression.length - 1);
      const answer = progression[randomElementID];
      progression[randomElementID] = '..';
      const question = progression.join(' ');
      return [question, answer];
    },
  },
  'brain-prime': {
    'start-phrase': () => {
      console.log(
        // eslint-disable-next-line comma-dangle
        'Answer "yes" if given number is prime. Otherwise answer "no".'
      );
    },
    'question-and-answer': () => {
      const question = getRnd(2, 100);
      const answer = isPrime(question);
      return [question, answer];
    },
  },
};

export default games;
