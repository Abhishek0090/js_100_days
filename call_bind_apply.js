//call 

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// Call the fullName method of person1 with person2 as the context
console.log(person.fullName.call(person1, "Oslo", "Norway")); // Output: John Doe, Oslo, Norway
console.log(person.fullName.call(person2, "Stockholm", "Sweden")); // Output: Mary Doe, Stockholm, Sweden



//apply

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // Create a new function with person1 as the context
// const person1FullName = person.fullName.bind(person1, "Oslo", "Norway");
// console.log(person1FullName()); // Output: John Doe, Oslo, Norway

// // Create a new function with person2 as the context
// const person2FullName = person.fullName.bind(person2, "Stockholm", "Sweden");
// console.log(person2FullName()); // Output: Mary Doe, Stockholm, Sweden



//bind

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // Create a new function with person1 as the context
// const person1FullName = person.fullName.bind(person1, "Oslo", "Norway");
// console.log(person1FullName()); // Output: John Doe, Oslo, Norway

// // Create a new function with person2 as the context
// const person2FullName = person.fullName.bind(person2, "Stockholm", "Sweden");
// console.log(person2FullName()); // Output: Mary Doe, Stockholm, Sweden
