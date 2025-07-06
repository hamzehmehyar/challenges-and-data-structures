const Linkedlist = require("./linkedlist");
const reverseLlist = require("./Reverse/reverse");
const reverse = require('./Reverse/reverse'); 
const SortedMerge = require('./MergeSorted/sortedMerge');
const rotateList = require('./RotateLinkedList/rotateLinkedList');


/* const list = new Linkedlist();

list.add(2);

list.add(7);

list.add(8);

list.add(9);

console.log(list.includes(8));

list.insertAt(3 , 2);

list.remove(9);


list.print();

const list2 = new reverseLlist();

list2.reverse(list);

list.print(); */

//----------------------------------------------

/* const myList = new Linkedlist();

myList.add(5);
myList.add(10);
myList.add(15);

myList.print();


const yourList = new Linkedlist();

yourList.add(2);
yourList.add(3);
yourList.add(20);

yourList.print();

const sortedMergeHamzeh = new SortedMerge();

const mergedHead = sortedMergeHamzeh.sortedMerge(myList.head, yourList.head);


const mergedList = new Linkedlist();
mergedList.head = mergedHead;

mergedList.print(); */

const list = new Linkedlist();

list.add(10);

list.add(20);

list.add(30);

list.add(40);

list.add(50);

list.print();

const rotator = new rotateList();

const rotatedHead = rotator.rotate(list.head , 3 , list.size);

list.head = rotatedHead;

console.log("List after rotating left by 3 : ");
list.print();