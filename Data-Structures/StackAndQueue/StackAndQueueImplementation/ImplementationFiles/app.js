const stack = require("./stack");
const queue = require("./queue");


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
