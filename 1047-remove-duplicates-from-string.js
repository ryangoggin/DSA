/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2:

Input: s = "azxxzy"
Output: "ay"
*/

/*
faster O(n) way, use a stack
1.) set the res as an empty array that will act as a stack
2.) iterate over s
3.) if the current letter doesn't match the last letter of the res stack, push that letter onto the stack
4.) otherwise, pop off the top of the res stack as it's an adjacent duplicate
5.) once loop completes, return the joined together res array
*/

var removeDuplicates = function(s) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== res[res.length - 1]) {
            res.push(s[i]);
        } else {
            res.pop();
        }
    }

    return res.join("");
};

/*
only passes 104/106 cases
too slow, almost O(m*n) where m is # of adjacent duplicates, n is length of each s as duplicates are removed
1.) iterate over each char in s, if the current and next letters match, make a new s
2.) new s will be two slices concatenated around the duplicates such that they are excluded from new s
3.) set s to the recursive call on new s
4.) after iteration return s
*/

var removeDuplicates = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            let newS = s.slice(0, i) + s.slice(i+2, s.length);
            s = removeDuplicates(newS);
        }
    }

    return s;
};
