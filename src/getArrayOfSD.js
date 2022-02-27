// Return array of simple divisors for given number

export default (num) => {
  let number = num;
  const result = [];
  let divisor = 2;
  while (divisor !== number) {
    if (number % divisor === 0) {
      number /= divisor;
      result.push(divisor);
      divisor = 2;
    } else {
      divisor += 1;
    }
  }

  result.push(number);
  return result;
};
