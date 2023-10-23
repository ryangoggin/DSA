/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:

Input: n = 16
Output: true

Example 2:

Input: n = 5
Output: false

Example 3:

Input: n = 1
Output: true
*/

/*
O(log n)
log(n) / log(4) is same as 4th root, perform that and check if it is an integer
*/

var isPowerOfFour = function(n) {
    return Number.isInteger(Math.log(n) / Math.log(4)) ? true : false;
};
