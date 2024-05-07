function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

// Example usage:
const principal = 1000; // Initial amount
const rate = 5; // Rate of interest (5%)
const time = 2; // Time in years
const interest = calculateSimpleInterest(principal, rate, time);
console.log("Simple Interest:", interest);
