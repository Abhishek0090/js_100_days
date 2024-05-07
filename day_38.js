const calculateDateDifference = (date1, date2) => {
  let currentDate1 = new Date(date1);
  let currentDate2 = new Date(date2); // Change date1 to date2

  let diff = Math.abs(currentDate2 - currentDate1);

  return diff / (24 * 60 * 60 * 1000);
};

console.log(calculateDateDifference("2020-02-01", "2020-03-30"));
