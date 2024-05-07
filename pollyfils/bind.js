//  Bind Pollyfills

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

// Pollfills for same

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as its not callabel");
  }

  context.fn = this;
  //   context.fn(...args);
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFund = purchaseCar.bind(car1);

console.log(newFund("Rs", "100000000"));
