/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
*/

/*
1.) have a counter to track which node you're at
2.) set a start and curr both to head of the given LL
3.) iterate to the left node by incrementing counter and set the start to the curr and curr to its own next
4.) once there, make the tail the curr (the left node) and set prev to null
5.) until counter reaches right, reverse this portion of the linked list
5a.) create and old next variable to hold curr's next
5b.) set curr's next to prev
5c.) set prev to the curr
5d.) set curr to the old next
5e.) increment the counter
6.) once done reversing this portion, set start's next to prev and tail's next to curr
7a.) if the reversed portion starts at 1, return the prev node
7b.) otherwise, return head as the start hasn't changed
*/

var reverseBetween = function(head, left, right) {
    let counter = 1;
    let start = head;
    let curr = head;

    while (counter < left) {
        start = curr;
        curr = curr.next;
        counter++;
    }

    let tail = curr;
    let prev = null;

    while (counter <= right) {
        let oldNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = oldNext;
        counter++;
    }

    start.next = prev;
    tail.next = curr;

    if (left === 1) {
        return prev;
    } else {
        return head;
    }

};
