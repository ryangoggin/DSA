/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/*
1.) make a hashmap of letters in magazine and their frequency
2.) iterate over ransomNote and decrement each letter if it is in hashmap with a value over 0
3.) return false if the letter isn't in hashmap or it has a value of 0
4.) return true if the loop finishes
*/

var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;

    let hashmap = {};

    for (let i = 0; i < magazine.length; i++) {
        if (hashmap[magazine[i]]) {
            hashmap[magazine[i]]++;
        } else {
            hashmap[magazine[i]] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (hashmap[ransomNote[i]] > 0) {
            hashmap[ransomNote[i]]--;
        } else {
            return false;
        }
    }

    return true;
};
