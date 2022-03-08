// Logic for all games

import readlineSync from 'readline-sync';

// Number of game rounds
export const gameRounds = 3;

export default (rules, gameData) => {
  // Greet new user and ask about his/her name
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Talk about the rules of the game
  console.log(rules);

  // Playing game
  for (let i = 0; i < gameData.length; i += 1) {
    // Getting set of data (question and answer)
    const [question, correctAnswer] = gameData[i];

    // Ask a question and get an answer
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // Compare answers
    if (userAnswer !== String(correctAnswer)) {
      console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }

    // Tell user that his answer was correct
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
