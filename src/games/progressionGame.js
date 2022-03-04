// Logic for brain-progression game

import index from '../index.js';
import helloUser from '../cli.js';
import getRandomInt from '../getRandomInt.js';
import getRandomProgression from '../getRandomProgression.js';

export default () => {
  const userName = helloUser();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    // Generate random progression and choose random element for question
    const progression = getRandomProgression();
    const randomElementID = getRandomInt(0, progression.length - 1);
    const correctAnswer = progression[randomElementID];
    // Hide our choosen element
    progression[randomElementID] = '..';
    const question = progression.join(' ');
    const [userAnswer, result] = index(userName, question, correctAnswer);
    if (!result) {
      return console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
