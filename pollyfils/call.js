//  call Pollyfills

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

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not callable");
  }

  context.fn = this;
  context.fn(...args);
};


purchaseCar.myCall(car1, "Rs", "100000000");
