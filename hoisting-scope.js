// console.log(a)
// console.log(b)
// var a = 2
// let b = 2

// -------------------------

// var DEFAULT_RATE = 0.1;
// var rate = 0.05;

// function getRate() {
//   // var rate;
//   if (!rate) {
//     var rate = DEFAULT_RATE;
//   }

//   return rate;
// }

// console.log('Your rate is: ', getRate());

// ---------------------------------------

// Initialize x in the global scope
// var x = 100;

// function hoist() {
//   // A condition that should not affect the outcome of the code
//   if (false) {
//     var x = 200;
//   }
//   console.log(x);
// }

// ---------------------------------------

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs[i] = function () {
//     console.log('i am i :', i);
//   };
// }

// funcs[0]();
// funcs[1]();
// funcs[2]();

// ----------------------------------------
// a();
// function a() {
//   console.log('a');
// }
// b();
// var b = function () {
//   console.log('b');
// };

// --------------------------------------

// function myFunction() {
//   return (a = 2);
// }
// myFunction();
// --------------------------------------
// var a = 1;
// function foo() {
//   var a = 2;
//   console.log(a);
// }
// foo();
// console.log(a);

// ---------------------------------------
// function foo() {
//   function bar() {
//     return 5;
//   }
//   return bar();
//   function bar() {
//     return 10;
//   }
// }
// console.log(foo());
// -----------------------------------------
// function printA() {
//   console.log(a);
// }
// console.log(a);
// var a = 1;
// printA();

// -------------------------------------------
// function printA() {
//   a = 1;
// }
// printA();
// console.log(a);
// -------------------------------------------
// function printA() {
//   var a = 1;
// }
// printA();
// console.log(a);
// -------------------------------------------

// function a() {
//   var b = function () {
//     return 3;
//   };
//   return b();
//   var b = function () {
//     return 8;
//   };
// }
// console.log(a());
// -------------------------------------------
// function a() {
//   function b() {
//     return 3;
//   }
//   return b();
//   function b() {
//     return 8;
//   }
// }
// console.log(a());
// -------------------------------------------
// function foo() {
//   var bar = "I'm a bar variable";
//   function bar() {
//     return "I'm a bar function";
//   }
//   return bar();
// }
// console.log(foo());
// -------------------------------------------
// greeting();
// var greeting = function () {
//   console.log('Good morning');
// };
// greeting();
// function greeting() {
//   console.log('Good evening');
// }
// greeting();

// Precedence of function expressions and function declaration
// -------------------------------------------
// var x = 'foo';
// (function () {
//   console.log('x: ' + x);
//   var x = 'bar';
//   console.log('x: ' + x);
// })();
// ---------------------------------------------
// var v1 = 10;
// (function () {
//   console.log(v1);
//   v1 = 20;
//   console.log(v1);
// })();
// console.log(v1);
// var v1 = 30;
// ---------------------------------------------
// var v1 = 10;
// (function () {
//   console.log(v1);
//   var v1 = 20;
//   console.log(v1);
// })();
// console.log(v1);
// var v1 = 30;
// ---------------------------------------------
// var v1 = 10;
// (function () {
//   v3 = 35;
//   console.log(v3);
//   var v3 = 45;
//   v2 = 25;
//   console.log(v1);
// })();
// console.log(v2);
// console.log(v3);
// var v1 = 30;
// ----------------------------------------------
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1;
//     var y = 2;
//     console.log(x); //1
//   }
//   console.log(x); //1
//   console.log(y); //2
// })();
