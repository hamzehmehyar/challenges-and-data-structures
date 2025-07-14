const Stack = require("../ImplementationFiles/stack");

//
test("pushing a node into the stack" , () => {


    const stack = new Stack();

    stack.push(1);

    expect(stack.peek()).toBe(1);


});


//
test("popping a node from the stack" , () => {


    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2); // because the last in first out in stack the 2 should be out

    expect(stack.peek()).toBe(1);


});


//
test("checking if the stack is empty" , () => {


    const stack = new Stack();

    //in case the stack is empty

    expect(stack.isEmpty()).toBe(true);

    //in case the stack is not empty

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);


});