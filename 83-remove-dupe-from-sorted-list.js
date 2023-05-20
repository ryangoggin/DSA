/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

/*
1.) store head, traverse the list
2.) if next isn't null and the next val equals current val, set next to next's next
3.) otherwise set curr to next
4.) return head
*/

var deleteDuplicates = function(head) {
    let curr = head;

    while (curr) {
        if (curr.next && curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};
