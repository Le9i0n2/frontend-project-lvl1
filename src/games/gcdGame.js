// Logic for brain-gcd game

import index from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Return number with specified common divisor
const getNumsWithCD = (commonDivisor) => commonDivisor * getRandomInt(1, 20);

/** Return greatest common divisor of two given numbers
 * Euclidean algorithm was used for search
 * */
const getGCD = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  const greaterNum = num1 > num2 ? num1 : num2;
  const smallerNum = greaterNum === num1 ? num2 : num1;
  const modulo = greaterNum % smallerNum;

  if (modulo === 0) {
    return smallerNum;
  }

  const iter = (num, mod) => {
    if (num % mod === 0) {
      return mod;
    }
    return iter(mod, num % mod);
  };

  return iter(smallerNum, modulo);
};

export default () => {
  // Set rules for the game
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < 3; i += 1) {
    const commonDivisor = getRandomInt(1, 5);
    const num1 = getNumsWithCD(commonDivisor);
    const num2 = getNumsWithCD(commonDivisor);
    const question = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2);
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  index(rules, gameData);
};
