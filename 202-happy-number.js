/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false
*/

/*
1.) convert n to a string
2.) solution is recursive, so base base is when string is length 1
2a.) happy numbers happen when single digit is 1 or 7, return whether n is equivalent to 1 or 7
3.) otherwise, make a new number to create the new number for the recursive call
4.) iterate through digits of the stringified number, square each digit and add to new number
5.) return the recursive call after iteration completes
*/

var isHappy = function(n) {
    let string = n.toString();

    if (string.length === 1) {
        return n === 1 || n === 7;
    }

    let newNum = 0;

    for (let i = 0; i < string.length; i++) {
        let num = parseInt(string[i]);
        let squared = num * num;
        newNum += squared;
    }

    return isHappy(newNum);
};
