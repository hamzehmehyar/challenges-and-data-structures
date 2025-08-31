const BinarySearchTree = require("./BinarySearchTree");

const secondMaxValue = require("./SecondMaxValue");

const leafSum = require("./leafSsum");

const tree = new BinarySearchTree(10); //the root is 10

tree.add(5);

tree.add(15);

tree.add(2);

tree.add(7);

tree.add(12);

tree.add(20);

console.log("The Tree : ");

tree.print();

console.log("----------------------------------------");


console.log("Pre Order Traversal");

tree.preOrderTraversal();

console.log("----------------------------------------");

console.log("Post Order Traversal");

tree.postOrderTraversal();

console.log("----------------------------------------");

console.log("In Order Traversal");

tree.inOrderTraversal();

console.log("----------------------------------------");


console.log("does the tree contains 5 ? ");

console.log(tree.contains(5));

console.log("----------------------------------------");

console.log("does the tree contains 30 ? ");

console.log(tree.contains(30));

console.log("----------------------------------------");

console.log("removing 15");

tree.remove(15);

console.log("----------------------------------------");

console.log("tree after removing");

tree.print();

console.log("----------------------------------------");

const bst = new secondMaxValue();

bst.add(50);
bst.add(30);
bst.add(70);
bst.add(60);
bst.add(80);

console.log("Tree structure");

bst.print();

console.log("the second max value is : ", bst.findSecondMax());


console.log("----------------------------------------");

const Tree = new leafSum();

Tree.add(10);
Tree.add(5);
Tree.add(15);
Tree.add(3);
Tree.add(7);
Tree.add(12);
Tree.add(18);

Tree.print();

console.log("leafSum : " , Tree.leafSum());































