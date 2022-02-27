/** Return greatest common divisor of two given numbers
 * Euclidean algorithm was used for search
 * */

export default (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  const greaterNum = num1 > num2 ? num1 : num2;
  const smallerNum = greaterNum === num1 ? num2 : num1;
  const modulo = greaterNum % smallerNum;

  if (modulo === 0) {
    return smallerNum;
  }

  const iter = (num, mod) => {
    if (num % mod === 0) {
      return mod;
    }
    return iter(mod, num % mod);
  };

  return iter(smallerNum, modulo);
};
