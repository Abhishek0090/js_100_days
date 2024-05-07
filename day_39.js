// find age of user

const calculateAge = (date) => {
  const currentDate1 = new Date().getFullYear();
  const paramsDate = new Date(date).getFullYear();

  return currentDate1 - paramsDate;
};

console.log(calculateAge("2001-07-09"));
