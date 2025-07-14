const Queue = require("../ImplementationFiles/queue");


//
test("enqueing a node into the queue" , () => {


    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.peek()).toBe(1);


});


//
test("dequeuing a node from the queue" , () => {


    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    

    //
    queue.dequeue(); //it's first in first out so the 1 should be out

    expect(queue.peek()).toBe(2);


});

//
test("checking if the queue is empty" , () => {


    const queue = new Queue();

    //in case the queue is empty we don't want to enqueue anything now

    expect(queue.isEmpty()).toBe(true);

    //in case it's not empty

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.isEmpty()).toBe(false);


});