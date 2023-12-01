// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

// Example 2:
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

// Example 3:
// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true


/*
time - O(n) where n is the length of the word1 or word2 array
space - O(1)

1.) return the equivalence comparison of the two word arrays joined into a string each
*/


var arrayStringsAreEqual = function(word1, word2) {
    return word1.join("") === word2.join("");
};
