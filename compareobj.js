const items = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.75 },
  { name: "Apple", price: 1.5 }, // Duplicate
  { name: "Orange", price: 2.0 },
  { name: "Banana", price: 0.75 }, // Duplicate
];

const filteredItems = items.filter((obj, index, self) => {
  const objectString = JSON.stringify(obj);
  return (
    self.findIndex((otherObj) => JSON.stringify(otherObj) === objectString) ===
    index
  );
});

console.log(filteredItems);
