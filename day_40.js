// generate chart

const generateChart = (arr) => {
  for (let item of arr) {
    let line = "";
    for (let i = 0; i <= item; i++) {
      line += "*";
    }
    console.log(line);
  }

  return;
};

console.log(generateChart([2, 4, 5, 7, 3]));
