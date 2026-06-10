// Objects -- Non primitive data type
// Arrays are also objects in js

let obj = {
  name: "saurabh",
  age: 25,
  hobbies: ["cycling", 10, true, undefined, null, ["a", "b"], { a: 10 }],
  address: {
    city: "Delhi",
    pincode: 110085,
    state: "New delhi",
  },
};

console.log(obj.hobbies[6].a)
