// Logic for brain-gcd game

import playGame, { gameRounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

/** Return greatest common divisor of two given numbers
 * Euclidean algorithm was used for search
 * */
const getGCD = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  const greaterNum = Math.max(num1, num2);
  const smallerNum = Math.min(num1, num2);
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
  for (let i = 0; i < gameRounds; i += 1) {
    const commonDivisor = getRandomInt(1, 5);
    const num1 = getRandomInt(1, 20) * commonDivisor;
    const num2 = getRandomInt(1, 20) * commonDivisor;
    const question = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2);
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  playGame(rules, gameData);
};
