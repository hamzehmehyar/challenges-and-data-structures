const TNode = require("./TNode");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {

    constructor(root){

        super(root);

    }

    add(value){


        const newNode = new TNode(value);

        if(!this.root){

            this.root = newNode;

            return;

        }

        let current = this.root;

        while(true){

            if(value < current.value){

                if(!current.left){

                    current.left = newNode;

                    break;

                }

                current = current.left;

            } else {

                if(!current.right){

                    current.right = newNode;

                    break;

                }

                current = current.right;

            }

        }

    }

    insertNodeHelper(node , value){

        if(value < node.value){

            if(node.left === null){

                node.left = new TNode(value);

            } else {

                this.insertNodeHelper(node.left , value);

            }

        } else {

            if(node.right === null){

                node.right = new TNode(value);

            } else {

                this.insertNodeHelper(node.right , value);

            }

        }

    }

    contains(value){

        let current = this.root;

        while(current){

            if(value === current.value) return true;

            //here we want to decide what is the current value we want to store
            current = value < current.value ? current.left : current.right;

        }

        return false;

    }

    //this is the public method that we call that calls the function that search for the node we want to remove
    remove(value){

        this.root = this._removeNode(this.root , value);

    }

    _removeNode(node , value){

        if(!node) return null;

        //if the value of the node is less than the value of the current node that means it's in the right
        if(value < node.value){

            node.left = this._removeNode(node.left , value);
            return node;

        } else if(value > node.value){ //here if the value of the node is bigger than the current node that means it's in the right

            node.right = this._removeNode(node.right , value);
            return node;
            
        } else {

            if(!node.left && !node.right) return null; //that means there are no children

            if(!node.left) return node.right;

            if(!node.right) return node.left;


            let successor = node.right;

            while(successor.left) successor = successor.left;
            node.value = successor.value;

            node.right = this._removeNode(node.right, successor.value);
            return node;

        }

    }


}

module.exports = BinarySearchTree;