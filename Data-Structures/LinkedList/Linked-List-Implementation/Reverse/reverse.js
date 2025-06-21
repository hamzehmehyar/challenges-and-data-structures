class reverseLlist{

reverse(list){


    if(!list.head){
        
        console.log("list is empty , nothing to reverse");
        return;
        

    }

    if(!list.head.next){

        console.log("list has only one node");
        return;
        
    }

    let prev = null;
    let current = list.head;
    let next = null;

    while(current !== null){

        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }

    list.head = prev;

}

}

module.exports = reverseLlist;

