/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/

/*
1.) have t pointer and s pointer and a match variable
2.) iterate t pointer over t, start s pointer at 0
3.) every time t pointer's letter matches s pointer's letter, increment match and s pointer
4.) after iteration, return whether match is the length of s
*/

// faster version that returns as soon as match is made, doesn't wait to go through all of t
var isSubsequence = function(s, t) {
    if (s === "") return true;

    let match = 0;
    let sPointer = 0;

    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (t[tPointer] === s[sPointer]) {
            match++;
            sPointer++;
        }

        if (match === s.length) {
            return true;
        }
    }

    return false;
};

// slower version
var isSubsequence = function(s, t) {
    let match = 0;
    let sPointer = 0;

    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (t[tPointer] === s[sPointer]) {
            match++;
            sPointer++;
        }
    }

    return match === s.length;
};
