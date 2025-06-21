const Linkedlist = require("./linkedlist");
const reverseLlist = require("./Reverse/reverse");
const reverse = require('./Reverse/reverse'); 


const list = new Linkedlist();

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

list.print();