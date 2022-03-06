// Logic for brain-calc game

import index from '../index.js';
import getRandomInt from '../getRandomInt.js';

// Provides a map of mathematical operations for brain-calc game
const calcMap = {
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
  '*': (n1, n2) => n1 * n2,
};

// Return random math sign from these three: {+, -, *}
const getRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  return mathSigns[Math.floor(Math.random() * mathSigns.length)];
};

export default () => {
  // Set rules for the game
  const rules = 'What is the result of the expression?';
  const gameData = [];
  // Getting set of game data (three pairs question-correctAnswer)
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 10);
    const sign = getRandomMathSign();
    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = calcMap[sign](num1, num2);
    gameData.push([question, correctAnswer]);
  }

  // Start the game
  index(rules, gameData);
};
