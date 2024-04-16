//Write a funciton to check if  a character is uppercase or lowercase

const isUpperCase = (str) => {
  let istrue = false;

  if (str === str.toUpperCase()) {
    istrue = true;
  }

  return istrue;
};

console.log(isUpperCase("u"));

const isLowerCase = (str) => {
  let istrue = false;

  if (str === str.toLowerCase()) {
    istrue = true;
  }

  return istrue;
};

console.log(isLowerCase("c"));
