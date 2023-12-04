/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.



Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

/*
time - O(n)
space - O(1)

use 2 pointers to swap until the pointers meet in the middle
could also use .reverse()
*/

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (right > left) {
        let prevLeft = s[left];
        let prevRight = s[right];

        s[left] = prevRight;
        s[right] = prevLeft;

        left++;
        right--;
    }
};
