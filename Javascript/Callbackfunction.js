// Callback function -- A function when passed to another function as a argument is called callback function
// A function can be stored in variable, this is the reason CB is possible
// let a = function () {
//   console.log("func");
// };

let sum = function (a, b) {
  return a + b;
};

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function calc(a, b, cb) {
  return cb(a, b);
}

let ans = calc(2,3,mult)

console.log(ans)
