const Linkedlist = require('../linkedlist'); 
const RotateList = require('../RotateLinkedList/rotateLinkedList');


// here we are converting it to an array
function linkedListToArray(head) {

    const result = [];

    let current = head;

    while (current) {

        result.push(current.data);

        current = current.next;
    }

    return result;
}


// here we are testing it when the k = 0
test("test rotating by k = 0", () => {

    const linkedlist = new Linkedlist();

    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.add(4);
    linkedlist.add(5);
    linkedlist.add(6);

    const original = linkedListToArray(linkedlist.head);

    const rotator = new RotateList();
    const rotatedHead = rotator.rotate(linkedlist.head, 0, linkedlist.size);

    const rotated = linkedListToArray(rotatedHead);

    expect(rotated).toEqual(original); 

});

 test("test rotating by k = 7 (larger than the list size)", () => {

    const linkedlist = new Linkedlist();

    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.add(4);
    linkedlist.add(5);
    linkedlist.add(6);

    const rotator = new RotateList();


    const rotatedHead = rotator.rotate(linkedlist.head, 7, linkedlist.size);
    const rotated = linkedListToArray(rotatedHead);

    expect(rotated).toEqual([2, 3, 4, 5, 6, 1]);
}); 

