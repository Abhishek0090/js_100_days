// Pollyfill for memorize// Basic memoization function
function memoize(func) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args); // Creating a unique key based on function arguments

    console.log(key, "KEYD");
    if (!(key in cache)) {
      const startTime = performance.now(); // Start measuring execution time
      cache[key] = func.apply(this, args); // Calculating and caching the result
      const endTime = performance.now(); // Stop measuring execution time
      console.log(`Execution time: ${endTime - startTime} milliseconds`); // Log execution time
    }

    console.log(cache,"SDJFK")
    return cache[key];
  };
}

// Example function to demonstrate memoization
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoizing the fibonacci function
const memoizedFibonacci = memoize(fibonacci);

// Calling the memoized fibonacci function
console.log(memoizedFibonacci(10)); // This will be computed and cached
console.log(memoizedFibonacci(10)); // This will use the cached result
