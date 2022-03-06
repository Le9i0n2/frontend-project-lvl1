// Logic for brain-progression game

import index from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Return random math progression with random length (from 5 to 10 symbols)
const getRandomProgression = () => {
  const start = getRandomInt(1, 50);
  const step = getRandomInt(2, 5);
  const length = getRandomInt(4, 9);
  const result = [start];
  for (let i = 0; i < length; i += 1) {
    const newNum = result[i] + step;
    result.push(newNum);
  }

  return result;
};

export default () => {
  // Set rules for the game
  const rules = 'What number is missing in the progression?';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < 3; i += 1) {
    const progression = getRandomProgression();
    const randomElementID = getRandomInt(0, progression.length - 1);
    const correctAnswer = progression[randomElementID];
    progression[randomElementID] = '..';
    const question = progression.join(' ');
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  index(rules, gameData);
};
