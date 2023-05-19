/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/*
1.) initialize the result as a list node with an arbitrary value, set a variable to it to track the head
2.) create variables for the sum and the carry value, start both at 0
3.) traverse the linked lists while there are still values in either or the sum is a postive value
3.) if theres a node in l1, add it's value to sum and set it to the next node, if there's a node in l2 add its value to sum and set it to the next node
4.) if sum is over 10, set carry to 1 and subtract 10 from sum
5.) create a new node for the sum and set it to the next value of the head variable
6.) set head to this new node
7.) set num to carry whether it is 1 or 0 and reset carry to 0 at the end of the loop
8.) return res.next as the first node is arbitrary
*/

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let resHead = res;

    let sum = 0;
    let carry = 0;

    let curr1 = l1;
    let curr2 = l2;

    while (curr1 || curr2 || sum > 0) {
        if (curr1) {
            sum += curr1.val;
            curr1 = curr1.next;
        }

        if (curr2) {
            sum += curr2.val;
            curr2 = curr2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        resHead.next = new ListNode(sum);
        resHead = resHead.next;

        sum = carry;
        carry = 0;
    }

    return res.next;
};
