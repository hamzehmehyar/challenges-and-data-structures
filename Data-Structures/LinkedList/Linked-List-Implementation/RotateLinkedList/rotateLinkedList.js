class rotateList {

    rotate(head , k , size){

        if(k < 0){

            k = size - (Math.abs(k) % size);

        }

        k = k % size;

        if(head === null || k === 0){

            return head;

        }

        let count = 1;

        //first we want to define the head as the current value

        let current = head;

        while(count < k && current != null){

            current = current.next;
            count++;

        }

        //now this is where the new list should start after rotation
        let newhead = current.next;

        if (!newhead) {
    
            return head;
        }


        let oldHead = head; /* /here after splitting , we are saving the head that we got after 
                               splitting based on what k told us where to stop in a
                                variable called old head */

        
        //splitting the list
        current.next = null;

        let tail = newhead;
        
        while(tail.next !== null){

            tail = tail.next;

        }

        tail.next = oldHead;


        return newhead;



    }


}

module.exports = rotateList;