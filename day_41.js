//currency convertor

// write a function to convert an amount from one currency to another using static exchange rates

const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 82,
};

const convertCurrency = (amount, fromConvert, toConvert) => {
  const convertAmount = amount / rates[fromConvert];
  const finalAmount = convertAmount * rates[toConvert];
  return finalAmount;
};

console.log(convertCurrency(100, "USD", "INR"));
