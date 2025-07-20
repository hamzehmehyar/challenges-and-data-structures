const stack = require("./stack");
const queue = require("./queue");
const stackWithDeleteMiddle = require("../DeleteMiddleElement/deleteMiddleElement");


const stack1 = new stack();

stack1.push(1);

stack1.push(2);

stack1.print()

stack1.pop();

console.log("-----After popping------");


stack1.print();




//last in first out (LIFO)



console.log("---------------------------------------------------------------");

const queue1 = new queue();

queue1.enqueue(1);

queue1.enqueue(2);

queue1.enqueue(3);

queue1.print();

queue1.dequeue();

console.log("-----Dequeue----");


queue1.print();




console.log("----------------------------------------------------------------------");

const newStack = new stackWithDeleteMiddle();

newStack.push(1);

newStack.push(2);

newStack.push(3);

newStack.push(4);

newStack.push(5);

console.log("before deleting the middle element");

newStack.print();

newStack.deleteMiddle();

console.log("after deleting the middle element");



newStack.print();


