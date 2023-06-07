/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
*/

/*
O(n) sliding window

0.) similar set up to below but more efficient window use
1.) start end at 0, increment it to the end
2.) shrink window once it is longer than k
3.) increment/decrement the vowel counter accordingly
4.) handle max the same as below solution
*/
var maxVowels = function(s, k) {
    let res = 0;
    let counter = 0;
    let start = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let end = 0; end < s.length; end++) {
        if (vowels.has(s[end])) counter++;

        if (end - start + 1 > k) {
            if (vowels.has(s[start])) counter--;
            start++;
        }

        res = Math.max(res, counter);
        if (res === k) return res;
    }

    return res;
};

/*
Sliding window (still O(n*k) where n is chars in s and k is length of substring)
too slow, only passes 102/106 test cases

0.) have a variable to store the max value
1.) have a start at 0 and end at k to take a slice of s as the substring and slide that window across s
2.) have a set holding every vowel to check against
3.) iterate over each substring
4.) have a vowel counter to incrememnt if current char is a vowel
5.) set max to the max between current counter and old max
6.) if max === k, return max
7.) otherwise return max at the end of the outer loop
*/

var maxVowels = function(s, k) {
    let res = 0;
    let start = 0;
    let end = k;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    while (end <= s.length) {
        let substring = s.slice(start, end);
        let counter = 0;

        for (let i = 0; i < substring.length; i++) {
            if (vowels.has(substring[i])) {
                counter++;
                res = Math.max(counter, res);
                if (res === k) return res;
            }
        }
        start++;
        end++;
    }

    return res;
};
