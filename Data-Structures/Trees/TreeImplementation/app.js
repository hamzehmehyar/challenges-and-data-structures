const BinarySearchTree = require("./BinarySearchTree");

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






















