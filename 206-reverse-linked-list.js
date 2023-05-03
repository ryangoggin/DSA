/*
given the head of a linked list, return the reverse
*/

/*
0.) set a prev node to null as this will become the old head's next (it is the last node of reverse)
1.) iterate over the linked list with a while loop
2.) for each node, store the node's next value in a var
3.) set the node's next to previous node
4.) the new previous is now the old head
5.) the new head is now the old next (stored in step 2)
6.) after the while loop is done, return prev as it is the new head
*/

var reverseList = function(head) {
    let previous = null;

    while (head) {
        let oldNext = head.next;
        head.next = previous;
        previous = head;
        head = oldNext;
    }

    return previous;
};
