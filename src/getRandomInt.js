// Return random int number (from 1 to 100 by default)

// prettier-ignore
export default (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
