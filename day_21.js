// Write a function called calculateMean that takes an array of numbers as an input and returns the mean of those numbers

// todo : in math , the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbers

const calculateMean = (arr) => {
  //   let myarr = arr.reduce((acc, item) => acc + item, 0);
  //   myarr = myarr / arr.length;
  //   return myarr;

  let myarr = 0;
  for (let item of arr) {
    myarr += item;
  }
  myarr = myarr / arr.length;
  return myarr;
};

console.log(calculateMean([1, 3, 4, 6, 7]));
// console.log(calculateMean([10, 20, 30]));
// console.log(calculateMean([-1, 0, 1]));
// console.log(calculateMean([]));
