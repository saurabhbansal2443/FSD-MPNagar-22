// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8, 9];

// let res = [...arr1, ...arr2];

// let obj1 = {
//   name: "saurabh",
//   age: 25,
// };

// let obj2 = {
//   address: {
//     city: "delhi",
//   },
//   name: "Ajay",
// };

// let res = { ...obj2, ...obj1 };

// console.log(res);

// Rest Parameter

// function sum(a, b) {
//   return a + b;
// }

function sum(a, b, ...params) {
  let arr = params;
  console.log(a, b, params);
  let sum = arr.reduce(function (acc, currEle) {
    return acc + currEle;
  });
  return sum;
}

console.log(sum(2, 3, 4, 1, 7, 0));
