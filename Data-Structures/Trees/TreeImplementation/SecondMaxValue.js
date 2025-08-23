const BinarySearchTree = require("./BinarySearchTree");

class secondMaxValue extends BinarySearchTree {

    constructor(root){

        super(root);

    }

    findSecondMax(){

        if(!this.root){

            return null;

        }

        if(!this.root.left && !this.root.right){

            return null;

        }


        

        let current = this.root;
        let parent = null;

        while(current.right){

            parent = current;
            current = current.right;

        }

        if(current.left){

            let temp = current.left;

            while(temp.right){

                temp = temp.right;

            }

            return temp.value;

        } 

        return parent.value;

    }

}

module.exports = secondMaxValue;