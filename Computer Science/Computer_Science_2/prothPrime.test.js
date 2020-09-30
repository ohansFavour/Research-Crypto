const prothPrime = require("./prothPrime.js");

describe(" Proth Prime Function", () => {
  test("Returns invalid input message for a non-proth number", () => {
    expect(prothPrime(0)).toBe(
      "0 is an Invalid input, please enter a proth number"
    );
  });

  test("Returns 'not a prime number' for a proth number that is not prime", () => {
    expect(prothPrime(9)).toBe("Number 9 is a proth number that is not prime");
  });

  test("Returns 'is a prime number' for a proth number that is  prime", () => {
    expect(prothPrime(5)).toBe("Number 5 is a proth number that is prime");
  });

  test("Returns invalid input message for a non-proth number", () => {
    expect(prothPrime(-1)).toBe(
      "-1 is an Invalid input, please enter a proth number"
    );
  });

  test("Returns 'not a prime number' for a proth number that is not prime", () => {
    expect(prothPrime(25)).toBe(
      "Number 25 is a proth number that is not prime"
    );
  });

  test("Returns 'is a prime number' for a proth number that is  prime", () => {
    expect(prothPrime(13)).toBe("Number 13 is a proth number that is prime");
  });
});
