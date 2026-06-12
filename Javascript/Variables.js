// Var vs Let vs Const

// Redeclaration -- var can be redeclared  let and const cannot be redeclared

// let a = 10;
// let a = 100;
// console.log(a);

// Reinitialization -- var and let can be reintialize const cannot be
// const a;
// a = 10;
// console.log(a);
// Reassigning -- var and let can be reintialize const cannot be

// let a = 10;
// a = 100;

// Hoisting -->  Variables and functions will get their memory before the actual code execution

// var is hoisted , let and const are not hoisted

console.log(a);
var a = 10;
console.log(a);
one();
function one() {
  console.log("One called");
}
one();
