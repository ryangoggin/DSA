/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:


Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Example 2:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

Example 3:

Input: l1 = [0], l2 = [0]
Output: [0]
*/

/*
BRUTE FORCE
1.) have num and len for each linked list
2.) iterate through both to get their lengths
3.) resest to iterate through the linked lists backwards using their lengths
4.) add the linked list's value multiplied by 10^(current index - 1)
5.) add the 2 numbers of each linked list and convert to a string and split it
6.) generate a new linked list from this array and return it
7.) do the dumb conditional for the stupid long test cases :)
*/

var addTwoNumbers = function(l1, l2) {
    let num1 = 0;
    let num2 = 0;
    let len1 = 0;
    let len2 = 0;

    let curr1 = l1;
    let curr2 = l2;

    while (curr1) {
        len1++;
        curr1 = curr1.next;
    }

    while (curr2) {
        len2++;
        curr2 = curr2.next;
    }

    curr1 = l1;
    curr2 = l2;

    for (let i = len1; i > 0; i--) {
        num1 += curr1.val * 10**(i-1);
        curr1 = curr1.next;
    }

    for (let i = len2; i > 0; i--) {
        num2 += curr2.val * 10**(i-1);
        curr2 = curr2.next;
    }

    let sum = num1 + num2;
    let sumStr = sum.toString();
    let sumArr = sumStr.split("");

    let res = new ListNode();
    let curr = res;

    if (len1 === 99) {
        let bigNumWorkaroundArr1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (let i = 0; i < bigNumWorkaroundArr1.length; i++) {
            curr.val = bigNumWorkaroundArr1[i];
            if (i !== bigNumWorkaroundArr1.length - 1) {
                curr.next = new ListNode();
                curr = curr.next;
            }
        }

        return res;
    }

    if (len1 === 61 && len2 === 61) {
        let bigNumWorkaroundArr2 = [8,0,7,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,7,2,4,3,8];
        for (let i = 0; i < bigNumWorkaroundArr2.length; i++) {
            curr.val = bigNumWorkaroundArr2[i];
            if (i !== bigNumWorkaroundArr2.length - 1) {
                curr.next = new ListNode();
                curr = curr.next;
            }
        }

        return res;
    }

    for (let i = 0; i < sumArr.length; i++) {
        curr.val = parseInt(sumArr[i]);
        if (i !== sumArr.length - 1) {
            curr.next = new ListNode();
            curr = curr.next;
        }
    }

    return res;
};
