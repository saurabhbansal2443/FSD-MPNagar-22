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

// console.log(a);
// var a = 10;
// console.log(a);
// one();
// function one() {
//   console.log(a);
// }
// one();

// one();
// console.log(a);
// var a = 10;
// console.log(a);
// function one() {
//   console.log(a);
// }
// one();

// one();
// console.log(a);
// var a = 10;
// var b = 199 ;
// console.log(a);
// function one() {
//   console.log(a);
//   var a = 99;
//   console.log(a);
// }
// one();

// one();
// console.log(a);
// var a = 10;
// var b = 199;
// console.log(a);
// function one() {
//   console.log(a);
//   var a = 99;
//   console.log(b);
//   b = 200 ;
// }
// console.log(b);
// one();

// one();
// console.log(a);
// var a = 10;
// console.log(b);
// var b = 199;
// console.log(a);
// console.log(b);
// function one() {
//   console.log(a);
//   var a = 99;
//   console.log(b);
//   b = 200;
// }
// console.log(b);
// one();

//  var is function scoped and let and const are block scoped
// var let and const are function scoped because
//  function is also a block and let and const is block scoped

// Function -- the variables which can be accessed in a function is called function scop varinable

// function abc() {
//   var a = 10;
//   console.log(a);
// }

// abc();
// console.log(a);

// console.log(a);
// console.log(b);
// var a = 100;
// var b = 99;
// console.log(a);
// console.log(b);
// function abc() {
//   console.log(a);
//   var a = 199;
//   b = 199;
//   console.log(a);
//   console.log(b);
//   function def() {
//     var x = 100;
//     console.log(x);
//     console.log(a);
//     console.log(b);
//     xyz();
//     function xyz() {
//       console.log(x);
//       console.log(a);
//       console.log(b);
//     }
//     b = 999;
//   }

//   def();
// }
// abc();
// // console.log(x);
// console.log(a);
// console.log(b);

// Let and const

// console.log(a);
// let a = 100 ;
// console.log(a);
// Block Scope --

{
  var a = 10;
  let b = 99;
  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
