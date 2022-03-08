// Logic for brain-calc game

import playGame, { gameRounds } from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Provides a map of mathematical operations for brain-calc game
const calcMap = {
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
  '*': (n1, n2) => n1 * n2,
};

// Array of math signs
const mathSigns = ['+', '-', '*'];

export default () => {
  // Set rules for the game
  const rules = 'What is the result of the expression?';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < gameRounds; i += 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 10);
    const sign = mathSigns[getRandomInt(0, 2)];
    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = calcMap[sign](num1, num2);
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  playGame(rules, gameData);
};
