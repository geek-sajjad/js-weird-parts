// function outerFunc(outVar) {
//   function innerFunc(innerVar) {
//     console.log('outside var ', outVar);
//     console.log('inner var ', innerVar);
//   }
//   return innerFunc;
// }

// const newFunc = outerFunc('out');
// newFunc('inn');
// ---------------------------

// var answer = 0;

// const baseValue = (value) => (multipleValue) => value * multipleValue;
// const baseValue = function (value) {
//   return function (multipleValue) {
//     return value * multipleValue;
//   };
// };

// const multipleByTwo = baseValue(2);
// const multipleByFive = baseValue(5);
// answer = multipleByTwo(5);
// answer2 = multipleByFive(5);
// console.log(answer);
// console.log(answer2);
// --------------------------

// function x() {
//   var a = 25;
//   function z() {
//     var b = 55;

//     function y() {
//       console.log(a, b);
//     }

//     b = 99;

//     y();
//   }

//   z();
// }

// x();
// ---------------------------------
// const z = 44;
// const result = (function immediate(number) {
//   const message = `number is: ${z}`;
//   return message;
// })(100);
// console.log(result);
// --------------------------------
// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

// ---------------------
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
// ----------------------
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }
// ------------------------
// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?

// ------------------------
// disadvantage of closure
// garbage collection is not working
// function a() {
//   var x = 10,
//     z = 11;
//   return function () {
//     x++;
//     console.log(x);
//   };
// }

// const func = a();

// func();

// func();

// func();
// -----------------------------
// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items; // => [10]
// stack.items = [10, 100, 1000]; // Encapsulation broken!
// -------------------------------
// var myElements = [
//   /* DOM Collection */
// ];

// for (var i = 0; i < 100; ++i) {
//   myElements[i].onclick = function () {
//     alert('You clicked on: ' + i);
//   };
// }
// -------------------------------

// var getId = (function () {
//   var counter = 0;
//   return function () {
//     return 'prefix' + counter++;
//   };
// })();

// console.log(getId());
// console.log(getId());
// console.log(getId());
