// Check if a number is prime. Return 'yes' or 'no'

export default (num) => {
  const halfOfNum = Math.ceil(num / 2);
  for (let i = 2; i <= halfOfNum; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};
