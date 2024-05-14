// extract number from a string

const extractNumber = (str) => {
  let number;
  const regex = /^\d$/;
  // regex.test(item)
  // number = str
  //   .split("")
  //   .filter((item) => regex.test(item))
  //   .join("");

  number = str
    .split("")
    .filter((item) => Number(item))
    .join("");
  return number;
};

console.log(extractNumber("12a34fsdfas35fhsaiudnoisan23423"));
