const stack = require("../../StackAndQueueImplementation/ImplementationFiles/stack");


class minElement extends stack {


    constructor(){

        super();

        this.minStack = new stack(); // this is an alternative stack to track the minimum element

    }

    push(value){

        super.push(value);

        if(this.minStack.isEmpty() || value <= this.minStack.peek()){

            this.minStack.push(value);

        }

    }

    pop(){

        const popped = super.pop();

        if(popped === this.minStack.peek()){

            this.minStack.pop();

        }

        return popped;

    }

    getMin(){

        if(this.minStack.isEmpty()){

            console.log("the stack is empty");
            

        }

        return this.minStack.peek();
    
    }



}

module.exports = minElement;
