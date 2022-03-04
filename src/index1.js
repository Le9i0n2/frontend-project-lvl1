// Present logic for gameplay

import readlineSync from 'readline-sync';

export default (userName, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let result;
  if (userAnswer !== String(correctAnswer)) {
    result = false;
  } else {
    result = true;
  }
  return [userAnswer, result];
};
