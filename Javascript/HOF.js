//  Higher Order functionm --- Either it should be a callback function or if it returns a function it is called HOF

//  forEach

// let arr = [1, 2, 3, 4, 5, 6];

// function print(ele, index, arr) {
//   console.log(ele, index, arr);
// }

// arr.forEach(print);

// arr.forEach(function print(ele, index, arr) {
//   arr[index] = ele*2
// });

// Pure Functions --  A function will output the same result for same input

// Map --

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.map(function (ele, index, array) {
//   return ele * 2;
// });
// console.log(arr);
// console.log(ans);

// filter

// let arr = [1, 2, 3, 4, 5, 6];

// let odd = function (ele) {
//   return ele % 2 != 0;
// };

// let even = function (ele) {
//   return ele % 2 == 0;
// };

// let ans = arr.filter(odd)

// console.log(ans);

// reduce

// let arr = [1, 2, 3, 4, 5, 6];

// let sum = arr.reduce(function (acc, currEle) {
//   return acc + currEle;
// },10);

// console.log(sum);

// Practise
// Question 1

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr
//   .map(function (ele) {
//     return ele * ele;
//   })
//   .filter(function (ele) {
//     return ele % 2 == 0;
//   })
//   .reduce(function (acc, currEle) {
//     return acc * currEle;
//   });

//   console.log(ans);

// Question 2

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 15 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 17 },
// ];

// const ans = users
//   .filter(function (obj) {
//     return obj.age > 18;
//   }) // [ { name: 'Alice', age: 22 }, { name: 'Charlie', age: 30 } ]
//   .map(function (obj) {
//     return obj.name;
//   });

// console.log(ans);

// Question 3

// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Mouse", price: 25, inStock: false },
//   { name: "Monitor", price: 200, inStock: true },
//   { name: "Keyboard", price: 75, inStock: false },
// ];

// const ans = products
//   .filter(function (obj) {
//     return obj.inStock;
//   })
//   .reduce(function (acc, currObj) {
//     return acc + currObj.price;
//   }, 0);

//   console.log(ans)

// Question 4

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const ans = fruits.reduce(function (acc, currEle) {
//   if (acc[currEle]) {
//     acc[currEle] = acc[currEle] + 1;
//   } else {
//     acc[currEle] = 1;
//   }
//   return acc;
// }, {});

// console.log(ans);

// Question 5 

const students = [
  { name: 'Emily', grade: 'A' },
  { name: 'Jack', grade: 'B' },
  { name: 'Sophia', grade: 'A' },
  { name: 'Danny', grade: 'C' }
];
/* Expected output:
{
  A: ['Emily', 'Sophia'],
  B: ['Jack'],
  C: ['Danny']
}
