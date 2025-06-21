const Node = require("./node");

class Linkedlist {

    constructor(){

        this.head = null;
        this.size = 0;

    }

    add(data){

        //initializing an object from the class node
        let newNode = new Node(data);

        if(this.head === null){

            this.head = newNode;
            return;

        }

        let current = this.head;

        while(current.next !== null){

            current = current.next;

        }

        current.next = newNode;
        this.size++;

    }

    remove(data){

        //the first if statement checks if the linked list is empty 
        if(this.head === null){

            console.log("the list is empty");
            
            return null;

        }


        //this if statement checks if the node is the head node
        if(this.head.data === data){

            this.head = this.head.next;
            this.size--;

            return data;

        } else {

            let prev = this.head;

            /* this while loop checks and says while the next node exists and the next node not equal
            to the passed data by the user or the value he wants to remove from the list it will be stored 
            as a previous value */
            while(prev.next && prev.next.data !== data){

                prev = prev.next;

            }

            if(prev.next){

                const removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;

                return removedNode.data;

            }

            //if the previous reached the last element node and there is no next node
            return null;

        }


    }

    includes(head , key){

        let current = head;

        while(current !== null){

            if(current.data === key){

                return true;

            }

            current = current.next;

        }

        return false;

    }

    insertAt(data , index){

        if(index < 0 || index > this.size){

            console.log("the index you entered is less than zero or bigger than the index size of the linkedList");

            return null;
            

        }

        const newNode = new Node(data);

        //if the user decided to add a node to index zero

        if(index === 0){

            newNode.next = this.head;
            this.head = newNode;

            this.size++;

            return;

        }

        let current = this.head;
        let prev = null;
        let count = 0;

        while(count < index){

            prev = current;
            current = current.next;
            count++;

        }

        newNode.next = current;
        prev.next = newNode;

        this.size++;

    }

 
    print(){

        let current = this.head;

        if(current === null){

            console.log("List is empty");
            return;

        }

        let result = '';

        while(current !== null){

            result += current.data + " -> "

            console.log(current.data);
            current = current.next;
            
        }

        result += "null"
        console.log("head -> " , result);
        

    }

    
}

module.exports = Linkedlist;