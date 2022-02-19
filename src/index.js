// Present logic for all games

import readlineSync from 'readline-sync';
import games from './gamesMap.js';

export default (userName, game) => {
  games[game]['start-phrase']();

  for (let i = 0; i < 3; i += 1) {
    // Get random question and correct answer for it
    const [question, correctAnswer] = games[game]['question-and-answer']();

    // Asking user a question, and get his/her answer
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // If he/she fails, game is over
    if (userAnswer !== String(correctAnswer)) {
      // prettier-ignore
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};
