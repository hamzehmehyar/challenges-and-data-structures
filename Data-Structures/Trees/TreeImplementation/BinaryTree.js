const TNode = require("./TNode");

class BinaryTree {

    constructor(rootValue){

        this.root = rootValue !== undefined ? new TNode(rootValue) : null;

    }

    
    inOrderTraversal(node = this.root){

        if(!node) return;

        this.inOrderTraversal(node.left);

        //
        console.log(node.value);
        //

        this.inOrderTraversal(node.right);
        

    }

    postOrderTraversal(node = this.root){

        if(!node) return;

        //left
        this.postOrderTraversal(node.left);

        //right
        this.postOrderTraversal(node.right);

        //visit the current node
        console.log(node.value);
        

    }

    
    preOrderTraversal(node = this.root){

        if(!node) return;

        //visit the current node
        console.log(node.value);

        //visit the left
        this.preOrderTraversal(node.left);

        //visit the right
        this.preOrderTraversal(node.right);
        
    }

    print(node = this.root , space = 0 , indent = 4){

        if(!node) return;

        space += indent;

        //
        this.print(node.right , space);

        //
        console.log(" ".repeat(space - indent) + node.value);

        //
        this.print(node.left , space);

    }


}

module.exports = BinaryTree;