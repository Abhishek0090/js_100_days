// writer a truncate string taht means to be truncated

const truncateString = (str, length) => {
  if (str.length > length) return str.slice(0, length) + "...";
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
