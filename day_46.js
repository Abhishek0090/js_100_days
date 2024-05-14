// validate mobile number

const validateMobile = (number) => {
  let isValid = /^(\+?91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(number);
  return isValid;
};

console.log(validateMobile("987656789111")); // false
console.log(validateMobile("9876567811")); // true
