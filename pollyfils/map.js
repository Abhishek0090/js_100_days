Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const numbers = [1, 2, 3, 4];

const result = numbers.myMap((num) => num);

console.log(result);
