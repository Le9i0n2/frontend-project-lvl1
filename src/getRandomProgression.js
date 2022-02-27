// Return random math progression with random length (from 5 to 10 symbols)

import getRandomInt from './getRandomInt.js';

export default () => {
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
