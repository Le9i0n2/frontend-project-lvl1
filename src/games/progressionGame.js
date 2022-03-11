// Logic for brain-progression game

import playGame, { gameRounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

/**
 * Return math progression with specified start value, step and length
 * Actual length equals length + starting value
 */
const getMathProgression = (start, step, length) => {
  const result = [start];
  for (let i = 0; i < length; i += 1) {
    const newNum = result[i] + step;
    result.push(newNum);
  }

  return result;
};

export default () => {
  // Set rule for the game
  const rule = 'What number is missing in the progression?';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < gameRounds; i += 1) {
    const progressionStartValue = getRandomInt(1, 50);
    const progressionStep = getRandomInt(2, 5);
    const progressionLength = getRandomInt(4, 9);
    const progression = getMathProgression(
      progressionStartValue,
      progressionStep,
      progressionLength,
    );
    const randomElementID = getRandomInt(0, progression.length - 1);
    const correctAnswer = progression[randomElementID];
    progression[randomElementID] = '..';
    const question = progression.join(' ');
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  playGame(rule, gameData);
};
