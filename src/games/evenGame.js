// Logic for brain-even game

import playGame, { gameRounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Check is the number even or not. Return boolean
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

export default () => {
  // Set rules for the game
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < gameRounds; i += 1) {
    const question = getRandomInt();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  playGame(rules, gameData);
};
