/*
given the head of a linked list, remove the nth node from the end of the list and return its head
*/

/*
1.) use a counter to get the length of the linked list (use a while loop and increment each time)
1b.) if n and length are the same, the head is being removed so return head.next
2.) subtract n from this length to get the node to be removed
3.) iterate to that node, store the previous node, assign previous node's next to the next of the removed node
4.) return head
*/

// time: O(n) where n is the number of nodes in the list
// space: O(n) where n is the number of nodes in the list (stored as both currNode and countNode)

var removeNthFromEnd = function(head, n) {
    if (!head) return head;

    let length = 1;
    let countNode = head;

    while(countNode.next) {
        length++;
        countNode = countNode.next;
    }

    if (length === n) return head.next;

    let removeNode = length - n;
    let currNode = head;

    for (let i = 1; i <= removeNode; i++) {
        if (i === removeNode) {
            if (currNode.next) currNode.next = currNode.next.next;
            else currNode.next = null;
            return head;
        }
        currNode = currNode.next;
    }
};
