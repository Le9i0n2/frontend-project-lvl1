// Logic for brain-prime game

import playGame, { gameRounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Check if a number is prime. Return boolean
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const halfOfNum = Math.ceil(num / 2);
  for (let i = 2; i <= halfOfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  // Set rule for the game
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < gameRounds; i += 1) {
    const question = getRandomInt(2, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  playGame(rule, gameData);
};
