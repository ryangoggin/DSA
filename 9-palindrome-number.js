/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/*
1.) convert number to a string
2.) split string into an array
3.) 2 pointers at both ends of array, return false if they ever don't match
4.) return true if loop finishes
*/

var isPalindrome = function(x) {
    let string = x.toString();
    let arr = string.split("");
    let start = 0;
    let end = arr.length - 1;

    while (end >= start) {
        if (arr[start] !== arr[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};
