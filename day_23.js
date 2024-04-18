// convert array into object

const numbers = [1, 2, 3, 45, 5];

let obj = {};

let count = {};

for (let num of numbers) {
  //   if (obj[num]) {
  //     obj[num] += 1;
  //   } else {
  //     obj[num] = 1;
  //   }

  obj[num] = (obj[num] || 0) + 1;
}

console.log(obj);
