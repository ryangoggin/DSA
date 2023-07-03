/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
*/

/*
1.) if the strings are the same, check if there are dupes (if the string length is not the same as the size of the set)
2.) make an array to fill with indices that differ
3.) if the two strings aren't the same length, return false
4.) iterate over s, push in any indices that differ between the strings
5.) if the length of the differing array is greater than 2, return false
6.) destructure the array into the first and second index where the strings differ
7.) check if the first diff in s is the second diff in goal and vice versa, return true
*/

var buddyStrings = function(s, goal) {
    if (s === goal) {
        let sSet = new Set(s);
        return s.length !== sSet.size;
    }

    let diffIdxs = [];

    if (s.length !== goal.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diffIdxs.push(i);

        if (diffIdxs.length > 2) return false;
    }

    let [firstDiff, secondDiff] = diffIdxs;

    return s[firstDiff] === goal[secondDiff] && s[secondDiff] === goal[firstDiff];
};
