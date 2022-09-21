// var grocery1 = ['apple'];
// var grocery2 = ['apple'];

// console.log(grocery1 === grocery2);

function createStack() {
  const items = [];
  return {
    push(item) {
      console.log(items);
      return items.push(item);
    },
    pop() {
      console.log(items);
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
