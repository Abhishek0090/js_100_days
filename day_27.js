// repeat string function e.g

const repeatString = (str, count) => {
    let modifyStr = str;
    for (let i = 1; i < count; i++) {
      modifyStr += str;
    }
    return modifyStr;

  // altenate

  return str.repeat(count);
};

console.log(repeatString("Abhishek", 4));
