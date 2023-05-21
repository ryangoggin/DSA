/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:

Input: head = [], val = 1
Output: []

Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
*/

/*
1.) check if the head is the value with a while loop, if it is set head to head.next, otherwise break the while loop
2.) traverse linked list with curr starting at the head after making sure it isn't the target
3.) if there is a next, check if its value is the remove target value
3.) if it is, set curr.next to curr.next.next
4.) return head
*/

// time: O(n) where n is the number of nodes in the linked list
// space: O(1) only individual nodes stored as variables

var removeElements = function(head, val) {
    if (!head) return head;

    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }

    let curr = head;

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};
