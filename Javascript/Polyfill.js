// Map --

// let arr = [1, 2, 3, 4, 5];

// let cb = function (ele) {
//   return ele * 2;
// };
// let ans = arr.map(cb);
// let ans = arr.customMap(cb);
//console.log(ans)
// Array.prototype.customMap = function (cb) {
//   let arr = this;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let cbRes = cb(arr[i], i, arr);
//     res.push(cbRes);
//   }
//   return res;
// };

// let ans = arr.customMap(cb);

// console.log(ans);

// filter ---

// let arr = [1, 2, 3, 4, 5];

// function cb(ele) {
//   return ele % 2 == 0;
// }

// let ans = arr.filter(cb);

// console.log(ans);

// Array.prototype.customFilter = function (cb) {
//   let arr = this;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let cbRes = cb(arr[i], i, arr);
//     if (cbRes == true) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// let ans = arr.customFilter(cb);

// console.log(ans);

// // Reduce --
// let arr = [1, 2, 3, 4, 5, 6];
// function cb(acc, currEle) {
//   return acc + currEle;
// }
// // let ans = arr.reduce(cb);
// // console.log(ans);
// Array.prototype.customReduce = function (cb, intialValue) {
//   let arr = this;
//   if (arr.length == 0) return;
//   let index = 0;
//   let acc = intialValue;
//   if (intialValue === undefined) {
//     index = 1;
//     acc = arr[0];
//   }
//   for (let i = index; i < arr.length; i++) {
//     acc = cb(acc, arr[i]);
//   }
//   return acc;
// };
// let ans = arr.customReduce(cb, 10);
// console.log(ans);

let arr = [1, 2, [3, 4, [5, 6, [7, 8]], [1, 3, 9]], 9];
// let res = arr.customFlat();
let res = customFlat(arr); 
console.log(res);

//[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 1, 3,
//   9, 9
// ]

