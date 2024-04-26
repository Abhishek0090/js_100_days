//
//// Write a function that take two argument  [0,1,2,3,4,5]

const numberGenerator = (a, b, arr = []) => {
  if (a <= b) {
    arr.push(a);
    return numberGenerator(a + 1, b, arr);
  }
  return arr;
};

console.log(numberGenerator(0, 5));
