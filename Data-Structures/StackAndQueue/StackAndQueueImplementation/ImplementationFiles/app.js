const stack = require("./stack");
const queue = require("./queue");
const stackWithDeleteMiddle = require("../DeleteMiddleElement/deleteMiddleElement");
const stackMin = require("../MinStack/MinElementStack");


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

console.log("-------------------------------------------------------------------------");

const myNewStack = new stackMin();

myNewStack.push(15);
myNewStack.push(7);
myNewStack.push(12);
myNewStack.push(3);

//print the stack
myNewStack.print();

//get the minimum element
let min = myNewStack.getMin(); //min is 3

//pop a node from the stack
let popped = myNewStack.pop(); //popped 3

myNewStack.print();   // 12 7 5

//get the new minimum element
min = myNewStack.getMin(); // min is 7

//peek the top node
let peeked = myNewStack.getTop(); //peeked 12

//push another element
myNewStack.push(2); //2 12 7 15
myNewStack.print(); //2 12 7 15

//get the new min element
min = myNewStack.getMin(); //should be 2

//check if the stack is empty
let isEmpty = myNewStack.isEmpty(); //should be false


//checking the min element
console.log("the min element is : ", min);


console.log("-----------");

const myNewStack2 = new stackMin();

myNewStack2.push(10);
myNewStack2.push(3);
myNewStack2.push(5);
myNewStack2.push(3);

myNewStack2.print();

myNewStack2.pop();

console.log("the minimum element is : " , myNewStack2.getMin());





















