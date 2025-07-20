const stack = require("../../StackAndQueueImplementation/ImplementationFiles/stack");

class StackWithDeleteMiddle extends stack {


    constructor() {

        super();

    }

    deleteMiddle(){

        const n = this.getSize();

        if(n === 0){

            console.log("the stack is empty");

            return;
            

        };

        if(n === 1){

            this.pop();

            return;

        }

        //now we want to check the size of the stack if it's even or odd to decide the middle index

        const middleIndex = n % 2 === 0 ? n / 2 - 1 : Math.floor( n / 2 );

        //defining the temporary stack

        const tempStack = new stack();

        //let's iterate through the stack

        for(let i = 0 ; i < n ; i++){

            const val = this.pop();

            if(i === middleIndex){

                continue;

            }

            tempStack.push(val);

        }

        while(!tempStack.isEmpty()){

            this.push(tempStack.pop());

        }


    }

}

module.exports = StackWithDeleteMiddle;