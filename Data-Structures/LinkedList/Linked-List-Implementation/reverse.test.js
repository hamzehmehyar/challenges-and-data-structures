const Linkedlist = require('./linkedlist');
const reverseLlist = require('./Reverse/reverse');

test("reverses the linked list", () => {

    const list = new Linkedlist();
    list.add(1);
    list.add(2);
    list.add(3); // list is 1 -> 2 -> 3

    const reverser = new reverseLlist();
    reverser.reverse(list);

    // After reverse: 3 -> 2 -> 1
    expect(list.head.data).toBe(3);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(1);
    expect(list.head.next.next.next).toBeNull();
});

