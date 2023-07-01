/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

/*
1.) iterate across the linked list to get its length
2.) divide the length by two and round up
3.) reset current node to head and iterate to the middle
4.) return curr
*/

var middleNode = function(head) {
    let curr = head;
    let length = 0;

    while (curr.next) {
        length++;
        curr = curr.next;
    }

    let middle = Math.ceil(length/2);

    curr = head;
    for (let i = 0; i < middle; i++) {
        curr = curr.next;
    }

    return curr;
};
