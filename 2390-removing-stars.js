/*
You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.

Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
*/

/*
stack solution: O(n) time complexity
1.) create an array to be a stack
2.) iterate over the chars
3.) if the current character is a "*" pop the last element of the array
4.) otherwise add the character to the end of the stack with push
5.) return the array joined together
*/

var removeStars = function(s) {
    let stack = [];

    for (char of s) {
        if (char === "*") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");

};

/*
recursive solution... too slow and doesn't work on longer strings --> only passes 29/65 tests
1.) split s into individual characters
2.) base case: chars array doesn't include '*', return s
3.) recursive: iterate to the first *
3a.) if i is 1 or greater, splice out i-1 and i
3b.) if i is no, splice out i
3c.) return function called on string with the star and leftmost char removed
*/

var slowRemoveStars = function(s) {
    let chars = s.split("");

    if (!chars.includes("*")) {
        return s;
    }

    for (let i=0; i < chars.length; i++) {
        if (chars[i] === "*") {
            if (i >= 1) {
                chars.splice(i - 1, 2);
            } else {
                chars.splice(i, 1);
            }
            return removeStars(chars.join(""));
        }
    }

};
