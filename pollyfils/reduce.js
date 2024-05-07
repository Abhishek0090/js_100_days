// Reduce function

// arr.reduce(()=>{},intialValue)

Array.prototype.myReduce = function (cb, intialValue) {
  var accumalator = intialValue;

  for (let i = 0; i < this.length; i++) {
    accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];
  }

  return accumalator;
};

const nums = [1, 3, 5, 6];

const sum = nums.myReduce((acc, item, i, arr) => {
  return acc + item;
}, 0);
c 
console.log(sum);
