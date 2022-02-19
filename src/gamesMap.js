/** Provides a map of games that can give game start phrase,
 * game random question and correct answer for it
 * */

import getRnd from './getRandomInt.js';
import isEven from './isEven.js';
import getRndSign from './getRandomMathSign.js';
import calcMap from './calcMap.js';

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
      const num1 = getRnd();
      const num2 = getRnd();
      const sign = getRndSign();
      const question = `${num1} ${sign} ${num2}`;
      const answer = calcMap[sign](num1, num2);
      return [question, answer];
    },
  },
};

export default games;
