const Node = require("./node");

class queue {

    constructor(){

        this.front = null;
        this.rear = null;

        this.size = 0;


    }

    enqueue(value){                                                                                 //

        const newNode = new Node(value);                                                            //

        if(this.isEmpty()){

            //here when the queue is empty we have to create nodes for the front and the rear
            this.front = newNode;
            this.rear = newNode;

        } else {
            //here if the queue was not empty logically the new node will come at the rear 
            this.rear.next = newNode;

            this.rear = newNode; //

        }
        //here we increase the size of the queue by 1
        this.size++;

    }

    dequeue(){

        if(this.isEmpty()){

            return null;

        } 

        const removedNode = this.front;

        //
        this.front = this.front.next;

        if(this.front === null){

            this.rear = null;

        }

        this.size--;

        return removedNode.value;                                                               //

    }
    
    peek(){

        if(this.isEmpty()){

            return null;

        }
        
        //in case it's not empty we have to return the data of the front node in the line
        return this.front.value;                                                                //

    }

    isEmpty(){

        return this.size === 0;

    }

    getSize(){

        return this.size;

    }

    print(){

        let current = this.front;

        //here we want to store the elements of the queue in an array
        const elements = [];

        while(current){

            elements.push(current.value);                                                            //
            current = current.next;

        }

        console.log("Queue : " , elements.join(" -> "));
        

    }


}

module.exports = queue;
