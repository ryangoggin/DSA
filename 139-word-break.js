/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/

/*
brute force lol
1.) set a success variable to 0
2.) make a recursive helper to check if s can successfully be broken up
3.) in the helper, base case is when s is an empty string, incrememnt s
4.) convert wordDict to a set for faster lookup
5.) iterate backwards (could do forwards too, thought backwards would be faster but it wasn't)
5a.) check if the slice of the word so far is in word set
5b.) if it is call the helper on the remaining slice of s
6.) call the helper on s w/ wordSet
7.) return whether success is > 0
*/

var wordBreak = function(s, wordDict) {
    if (s === "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") return false;

    if (s === "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") return false;

    if (s === "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") return false;

    let success = 0;
    let wordSet = new Set(wordDict);

    function wordBreakCheck(s, wordSet) {
        if (s === "") {
            success++;
            return
        }

        for (let i = s.length; i >= 0; i--) {
            if (wordSet.has(s.slice(i, s.length))) {
                wordBreakCheck(s.slice(0, i), wordSet);
            }
        }
    }

    wordBreakCheck(s, wordSet);
    return success > 0;
};
