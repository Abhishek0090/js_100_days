// inifinte currying

let obj = {
  name: "Abhishek",
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(b) {
    this.total *= b;
    return this;
  },
  subtract(c) {
    this.total -= c;
    return this;
  },
  divide(d) {
    this.total /= d;
    return this;
  },
  module(e) {
    this.total %= e;
    return this;
  },
};

const result = obj.add(2).multiply(4).subtract(3).divide(2).module(4);

console.log(result.total);
