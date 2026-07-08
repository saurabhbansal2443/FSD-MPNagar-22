let obj1 = {
  name: "saurabh",
  age: 25,
  address: {
    city: "delhi",
    houseNumber: 27,
  },
};
// Shallow Copy ;
// let obj2 = obj1;

// Deep Copy
// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name = "AJAY";

// console.log(obj1);
// console.log(obj2);
// Spread operator makes combination of shallow and deep copy
let obj2 = { ...obj1 };
obj2.name = "Ajay";
obj2.address.city = "BHOPAL";
console.log(obj1);
console.log(obj2);
