// Higher Order Function -- A function which takes input a function or return a  function ;

// forEach , map , filter , reduce

// forEach
// let arr = [100, 200, 300, 400, 500];

// arr.forEach(function (ele, index, arr) {
//   console.log(ele, index, arr);
// });

// Map

// let arr = [100, 200, 300, 400, 500];

// let ans = arr.map(function (ele) {
//   return ele / 2;
// });

// console.log(ans);

// Filter

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.filter(function (ele, index, arr) {
//   return ele % 2 != 0;
// });

// console.log(ans)

// Reduce

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (acc, currEle) {
//   return acc + currEle;
// }, 0);

// console.log(sum);

// Question 1  -- make a array of products which are in stock and have price greater than 50

// const products = [
//   { name: "Laptop", price: 1200, inStock: true },
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "Keyboard", price: 75, inStock: false },
//   { name: "Monitor", price: 300, inStock: true },
// ];

// const ans = products.filter(function (currObj) {
//   return currObj.price > 50 && currObj.inStock == true;
// });

// console.log(ans)

// Question 2 --  Calculate the final checkout price of a user's shopping cart,
// accounting for the quantity of each item

// const cart = [
//   { item: "Book", price: 15, quantity: 2 },
//   { item: "Pen", price: 2, quantity: 5 },
//   { item: "Bag", price: 40, quantity: 1 },
// ];

// const ans = cart.reduce(function (acc, currObj) {
//   return acc + currObj.price * currObj.quantity;
// }, 0);

// console.log(ans);

// Question 3 --

// const books = [
//   { title: "Dune", genre: "Sci-Fi" },
//   { title: "The Hobbit", genre: "Fantasy" },
//   { title: "Neuromancer", genre: "Sci-Fi" },
// ];

// // Expected Output
// //{
// //   "Sci-Fi": ["Dune", "Neuromancer"],
// //   "Fantasy": ["The Hobbit"]
// // }

// const ans = books.reduce(function (acc, currObj) {
//   const { genre, title } = currObj;
//   if (acc[genre]) {
//     acc[genre] = acc[genre].push(title);
//   } else {
//     acc[genre] = [title];
//   }
//   return acc;
// }, {});

// console.log(ans);



// Question 5
// const students = [
//   { name: "Emily", grade: "A" },
//   { name: "Jack", grade: "B" },
//   { name: "Sophia", grade: "A" },
//   { name: "Danny", grade: "C" },
// ];
/* Expected output:
{
  A: ['Emily', 'Sophia'],
  B: ['Jack'],
  C: ['Danny']
}
  */

