const Linkedlist = require('./linkedlist');


//testing the add function
test("Adding 2 to the linked list" , () => {

    const linkedlist = new Linkedlist();

    linkedlist.add(2);

    expect(linkedlist.head.data)
    .toBe(2);

});

//test the remove function
test("removing 2 from the linked list" , () => {

    const linkedlist = new Linkedlist();

    linkedlist.add(2);
    const removed = linkedlist.remove(2);
    expect(removed).toBe(2);
    expect(linkedlist.head).toBeNull(); //making sure that the list is empty 

});

//testing the includes function
test("searching if the element exists in the list" , () => {

    //here we are creating a new linkedlist
    const linkedlist = new Linkedlist();

    //adding the elements for the linkedlist
    linkedlist.add(1);
    linkedlist.add(4);
    linkedlist.add(7);

    expect(linkedlist.includes(linkedlist.head , 4)).toBe(true);

});

//testing the insertAt function
test("the element 3 is inserted at index 1" , () => {

    //let's also create a new list
    const linkedlist = new Linkedlist();

    linkedlist.add(1);
    linkedlist.add(4);
    linkedlist.add(7);

    linkedlist.insertAt(3 , 1);

    let current = linkedlist.head;
    let count = 0;

    while(count < 1){

        current = current.next;
        count++;

    }

    expect(current.data).toBe(3);


});

