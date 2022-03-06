// Logic for brain-even game

import index from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Check is the number even or not. Return 'yes' or 'no'
const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export default () => {
  // Set rules for the game
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    const correctAnswer = isEven(question);
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  index(rules, gameData);
};
