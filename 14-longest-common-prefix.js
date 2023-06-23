/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/*
1.) sort strings
2.) take longest prefix between first and last words through iterating over them
3.) return this prefix once letters in first and lasts words don't match
4.) if loop completes, return the first string because it is the longest common prefix
*/

var longestCommonPrefix = function(strs) {
    strs.sort();

    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].slice(0, i);
    }
    return strs[0];
};
