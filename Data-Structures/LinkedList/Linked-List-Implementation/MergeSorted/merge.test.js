const Linkedlist = require('../linkedlist'); 
const SortedMerge = require('../MergeSorted/sortedMerge');

//first we want to convert the list to an array
function listToArray(head) {

  const result = [];

  let current = head;

  while (current) {

    result.push(current.data);
    current = current.next;

  }

  return result;

};

describe("sortedMerge", () => {

  test("merges when one list is empty", () => {

    const list1 = new Linkedlist(); // this is an empty list
    const list2 = new Linkedlist();
    list2.add(1);
    list2.add(3);
    list2.add(5);

    const sortedMerger = new SortedMerge();
    const mergedHead = sortedMerger.sortedMerge(list1.head, list2.head);

    expect(listToArray(mergedHead)).toEqual([1, 3, 5]);

  });

  //when both lists are empty

  test("merges when both lists are empty", () => {

    const list1 = new Linkedlist();
    const list2 = new Linkedlist();

    const sortedMerger = new SortedMerge();
    const mergedHead = sortedMerger.sortedMerge(list1.head, list2.head);

    expect(mergedHead).toBeNull(); // it's expected to be null

  });


  test("merges two sorted lists into one sorted list", () => {
    const list1 = new Linkedlist();
    list1.add(5);
    list1.add(10);
    list1.add(15);

    const list2 = new Linkedlist();
    list2.add(2);
    list2.add(3);
    list2.add(20);

    const sortedMerger = new SortedMerge();
    const mergedHead = sortedMerger.sortedMerge(list1.head, list2.head);

    expect(listToArray(mergedHead)).toEqual([2, 3, 5, 10, 15, 20]); //as expected

  });
});