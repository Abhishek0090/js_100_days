// convert obj to arr

const obj = {
  name: "Abhishek",
  age: 23,
};

const arr = Object.entries(obj);
// .map(([key, value]) => [value, key]);
console.log(arr);

// convert arr to obj

const newObj = Object.fromEntries(arr);

// const newObj = arr.reduce((acc, [value, key]) => {
//   acc[key] = value;
//   return acc;
// }, {});

// const newObj = {};

// arr.forEach(([value, key]) => {
//   newObj[key] = value;
// });

console.log(newObj);
