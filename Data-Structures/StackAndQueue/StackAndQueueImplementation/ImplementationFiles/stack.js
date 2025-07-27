const Node = require("./node");

class stack {

    constructor(){

        this.top = null;
        this.size = 0;

    }

    push(value){

        const newNode = new Node(value);

        //

        newNode.next = this.top;
        this.top = newNode;

        this.size++;


    }

    pop(){

        if(this.isEmpty()){

            console.log("The stack is empty , what are you trying to remove ?!");

            return null;

        }

        const poppedValue = this.top.value;
        this.top = this.top.next;

        this.size--;

        return poppedValue;

    }

    peek(){

        return this.isEmpty() ? null : this.top.value;

    }

    getTop(){

        return this.isEmpty() ? null : this.top.value;

    }

    isEmpty(){

        return this.size === 0;

    }

    getSize(){

        return this.size;

    }

    print(){

        // let the current be the top of the stack
        let current = this.top;

        let stackValues = [];

        while(current){

            stackValues.push(current.value);

            current = current.next;

        }

        console.log("Stack : " , stackValues.join(" -> "));
        

    }

    toArray() {

        const result = [];

        let current = this.top;

        while (current) {

            result.push(current.value);

            current = current.next;
            
  }
        return result;

}



}

module.exports = stack;



