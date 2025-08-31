const BinarySearchTree = require("../BinarySearchTree");

const secondMaxValue = require("../SecondMaxValue");

const sumLeaf = require("../leafSsum");

test("test adding nodes to the tree" , () => {

    const bst = new BinarySearchTree(10);

    bst.add(5);
    bst.add(15);

    expect(bst.root.value).toBe(10);

    expect(bst.root.left.value).toBe(5);

    expect(bst.root.right.value).toBe(15);

});

test("adding deeper nodes or children" , () => {

    const bst = new BinarySearchTree(10);

    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.root.left.left.value).toBe(2);
    expect(bst.root.left.right.value).toBe(7);


});

test("check if a node exists" , () => {

    const bst = new BinarySearchTree(10);

    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    expect(bst.contains(10)).toBe(true);

    expect(bst.contains(7)).toBe(true);

    //testing a node that doesn't exist
    expect(bst.contains(12)).toBe(false);

});

//test removing a node from the tree
test("removing a node from the tree" , () => {

    const bst = new BinarySearchTree(10);

    bst.add(5);
    bst.add(15);
    bst.add(2);
    bst.add(7);

    //checking that node 2 exists
    expect(bst.contains(2)).toBe(true);

    //then removing it
    bst.remove(2);

    //then checking it got removed by contains function
    expect(bst.contains(2)).toBe(false);

    //5's left child should be null
    expect(bst.root.left.left).toBe(null);
});

//inOrder Traversal

test("InOrder Traversal" , () => {

    const bst = new BinarySearchTree(10);

        bst.add(5);
        bst.add(15);
        bst.add(2);
        bst.add(7);
        bst.add(12);
        bst.add(20);

        const result = [];

        bst.inOrderTraversal = function(node = this.root) {

            if(!node) return;

            this.inOrderTraversal(node.left);

            result.push(node.value);

            this.inOrderTraversal(node.right);

        };

        bst.inOrderTraversal();

        expect(result).toEqual([2, 5, 7, 10, 12, 15, 20]);

});

//preOrder Traversal
test("PreOrder Traversal" , () => {

        const bst = new BinarySearchTree(10);

        bst.add(5);
        bst.add(15);
        bst.add(2);
        bst.add(7);
        bst.add(12);
        bst.add(20);

        const result = [];

        bst.preOrderTraversal = function(node = this.root){

            if(!node) return;

            result.push(node.value);

            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);

        };

        bst.preOrderTraversal();

        expect(result).toEqual([10, 5, 2, 7, 15, 12, 20]);


});

//post order traversal
test("PostOrder Traversal" , () => {

        const bst = new BinarySearchTree(10);

        bst.add(5);
        bst.add(15);
        bst.add(2);
        bst.add(7);
        bst.add(12);
        bst.add(20);

        const result = [];

        bst.postOrderTraversal = function(node = this.root){

            if(!node) return;

            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);

            result.push(node.value);

        };

        bst.postOrderTraversal();

        expect(result).toEqual([2, 7, 5, 12, 20, 15, 10]);

})

//test find the 2nd maximum value in the tree

test("second maximum value" , () => {

    const bst = new secondMaxValue();
    
    bst.add(10);

    bst.add(5);

    bst.add(40);

    bst.add(20);

    bst.add(15);

    expect(bst.findSecondMax()).toBe(20);

});

test("second maximum value with only one node" , () => {

    const bst = new secondMaxValue(10);

    const result = bst.findSecondMax();

    expect(result).toBe(null);

});

test("test with a tree that have negative values" , () => {

    const bst = new secondMaxValue(-10);

    bst.add(-20);

    bst.add(-5);

    bst.add(-15);

    const result = bst.findSecondMax();

    expect(result).toBe(-10);

});

test("test calculating the sum of all the leaf nodes" , () => {

    const Tree = new sumLeaf();

    Tree.add(10);
    Tree.add(5);
    Tree.add(15);
    Tree.add(3);
    Tree.add(7);
    Tree.add(12);
    Tree.add(18);

    const result = Tree.leafSum();

    expect(result).toBe(40);


});

test("calculating the sum of the leaf node with negative values" , () => {


    const Tree = new sumLeaf(-10);

    Tree.add(-20);

    Tree.add(-5);

    Tree.add(-15);
 
    const result = Tree.leafSum();

    expect(result).toBe(-20);

});
