// Fibonacci usinbg recursion
0, 1, 1, 2, 3, 5, 8, 13;

const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2) ;
  }
};

console.log(fibonacci(20));
