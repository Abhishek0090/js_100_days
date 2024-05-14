// FizzBuzz Problem:
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

const printFizz = (obj) => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      obj["FizzBuzz"]++;
    } else if (i % 3 === 0) {
      obj["Fizz"]++;
    } else if (i % 5 === 0) {
      obj["Buzz"]++;
    }
  }
  return obj;
};

console.log(printFizz({ Fizz: 0, Buzz: 0, FizzBuzz: 0 }));
