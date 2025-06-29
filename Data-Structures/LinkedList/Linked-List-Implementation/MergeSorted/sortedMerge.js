class sortedMerge {

    sortedMerge(head1 , head2){

        //edge case

        if(head1 === null){

            return head2;

        } else if(head2 === null){

            return head1;

        }

        //using recursive

        if(head1.data <= head2.data){

            head1.next = this.sortedMerge(head1.next , head2);
            return head1;

        } else {

            head2.next = this.sortedMerge(head1 , head2.next);
            return head2;

        }


    }


}

module.exports = sortedMerge;