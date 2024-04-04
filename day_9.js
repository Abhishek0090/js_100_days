// Calculate the Average

// Write a function called Calculate the takes an array of numbers as an input and returns the average of those numbers

const calculateAverage = (arr) => {
  let finalAvg;

  finalAvg = arr.reduce((acc, item) => acc + item, 0);

  finalAvg = finalAvg / arr.length;
  return finalAvg;
};

console.log(calculateAverage([4, 4]));
