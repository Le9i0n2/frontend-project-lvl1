// Logic for brain-prime game

import index from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Check if a number is prime. Return 'yes' or 'no'
const isPrime = (num) => {
  const halfOfNum = Math.ceil(num / 2);
  for (let i = 2; i <= halfOfNum; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => {
  // Set rules for the game
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(2, 100);
    const correctAnswer = isPrime(question);
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  index(rules, gameData);
};
