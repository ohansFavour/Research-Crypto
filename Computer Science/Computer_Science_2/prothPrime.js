/*
Approach

1. Deduct 1 from the number. This would give a number in the form k*2^n, if the given number is a proth number.
2. Now, loop through all odd number starting form k=1 to n/k and check if k can divide n in such a way that ( n/k ) is a power of 2 or not.
3. If the number is prime, then according to the Proth theorem,  if there exists an integer a for which
   a^ (p-1)/2  is -1 (mod p)
  then p is prime
*/

/************************************************************* */

// Utility function that checks if the given number is a power of 2
const isPowerOfTwo = (num) => {
  if (num && !(num & (num - 1))) {
    return true;
  } else {
    return false;
  }
};

// Utility function that checks if the given number is a proth number
const isProthNumber = (num) => {
  let k = 1;
  while (k < num / k) {
    if (num % k == 0) {
      if (isPowerOfTwo(num / k)) {
        return true;
      }
    }
    k = k + 2;
  }
  return false;
};

// Utility function that checks if a proth number is a prime number
const prothPrimeCheck = (prothNumber) => {
  let arr = [];
  let d = prothNumber - 1;
  let power = d / 2;
  for (let a = 2; a < 15; a++) {
    arr.push(Math.pow(a, power) + 1);
  }
  const factorCheck = arr.map((el) => el / prothNumber);

  const isItPrime = factorCheck.some((e) => Number.isInteger(e));
  return isItPrime
    ? `Number ${num} is a proth number that is prime`
    : `Number ${num} is a proth number that is not prime`;
};

const checkProthPrime = (num) => {
  let MinusOne = num - 1;
  if (isProthNumber(MinusOne)) {
    return prothPrimeCheck(num);
  } else {
    return `${num} is an Invalid input, please enter a proth number`;
  }
};

module.exports = checkProthPrime;
