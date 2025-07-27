const minElementStack = require("../MinStack/MinElementStack");

test("retrieving the minimum element in the stack" , () => {


    const stack = new minElementStack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    let minElement = stack.getMin();

    expect(minElement).toEqual(1);


});

test("popping elements and verifying the minimum element in the stack after the pop" , () => {


    const stack = new minElementStack();

    stack.push(4);
    stack.push(5);
    stack.push(3);

    stack.pop();

    let min = stack.getMin();

    expect(min).toEqual(4);


});

test("pushing elements and verifying the minimum element in the stack after the push" , () => {


    const stack = new minElementStack();

    stack.push(2);
    stack.push(4);
    stack.push(3);
    stack.push(1);

    let min = stack.getMin();

    expect(min).toEqual(1);


});

