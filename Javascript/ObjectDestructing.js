// let obj = {
//   name: "saurabh",
//   age: 25,
//   address: {
//     hounseNumber: 27,
//     state: "delhi",
//   },
// };

// const { name, age, address } = obj;
// const { state } = address;

// console.log(name);
// console.log(age);

let arr = ["one", "two", "three", "four"];

const [oneth, twoth] = arr;

const [, , threeth] = arr;

console.log(oneth, twoth, threeth);
