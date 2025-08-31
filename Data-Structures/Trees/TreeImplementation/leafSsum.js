const BinarySearchTree = require("./BinarySearchTree");

class leafSum extends BinarySearchTree {

    constructor(root){

        super(root);

    }

    leafSum(node = this.root){

        if(!node) return 0;

        if(!node.left && !node.right){

            return node.value;

        }

        return this.leafSum(node.left) + this.leafSum(node.right);

    }


}

module.exports = leafSum;