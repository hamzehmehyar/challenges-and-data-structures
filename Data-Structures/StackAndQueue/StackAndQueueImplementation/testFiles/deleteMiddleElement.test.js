const StackWithDeleteMiddle = require("../DeleteMiddleElement/deleteMiddleElement");

//
test("delete middle element with odd number of elements" , () => {


    const stack = new StackWithDeleteMiddle();

    stack.push(1);

    stack.push(2);

    stack.push(3);

    stack.push(4);

    stack.push(5);

    stack.deleteMiddle();

    expect(stack.toArray()).toEqual([5 , 4 , 2 , 1]);


});

//
test("delete middle element with even number of elements" , () => {


    const stack = new StackWithDeleteMiddle();

    stack.push(1);

    stack.push(2);

    stack.push(3);

    stack.push(4);

    stack.deleteMiddle();

    expect(stack.toArray()).toEqual([4 , 2 , 1]);


});

//
test("deleting from an empty stack" , () => {


    const stack = new StackWithDeleteMiddle();

    stack.deleteMiddle();

    expect(stack.getSize()).toBe(0);


});


test("deleting from a stack with only one element" , () => {


    const stack = new StackWithDeleteMiddle();

    stack.push(1);

    stack.deleteMiddle();

    expect(stack.getSize()).toBe(0);

    expect(stack.pop()).toBeNull();


});