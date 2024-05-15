// find age

// find my birthday with age

const calculateAge = (date) => {
  const currentDate = new Date().getFullYear();

  const parsedDAta = new Date(date).getFullYear();

  return Math.abs(currentDate - parsedDAta);
};

console.log(calculateAge("09-07-2001"));

const calculateBirthDayYears = (age) => {
  const currentDate = new Date().getFullYear();

  return Math.abs(currentDate - parseInt(age));
};

console.log(calculateBirthDayYears(23));
