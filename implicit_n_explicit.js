// Implicit binding
var person = {
  name: "Abhishek",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is Abhishek

var obj = {
  name: "Abhishek",
  display: function (...args) {
    console.log(this.name + " " + args.join(" "));
  },
};

var obj1 = {
  name: "John",
};

obj.display.apply(obj1, ["Hello", "World"]); // Output: John Hello World

var person = {
  name: "Abhishek",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

var boundGreet = person.greet.bind({ name: "John" });
boundGreet(); // Output: Hello, my name is John
