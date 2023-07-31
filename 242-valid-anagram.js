/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
*/


/*
Brute force solution
1.) split each string into an array of its letters
2.) sort the arrays
3.) if they're different lengths, return false
4.) iterate over both and if any elements don't match it isn't an anagram
5.) return true if iteration completes
*/

var isAnagram = function(s, t) {
    let sLetters = s.split("");
    let tLetters = t.split("");

    if (sLetters.length !== tLetters.length) return false

    sLetters.sort();
    tLetters.sort();

    for (let i = 0; i < sLetters.length; i++) {
        if (sLetters[i] !== tLetters[i]) return false
    }

    return true
};

/*
Hashmap solution
1.) get freq of each letter in each string
2.) convert each freq object to its entries
3.) sort each entries array
4.) if they aren't the same length, no anagram and return false
5.) otherwise iterate through both and look for inconsistencies
6.) return false if any mismatch, true if iteration completes
*/

var isAnagram = function(s, t) {
    freq1 = {};
    freq2 = {};

    for (let letter of s) {
        if (freq1[letter]) {
            freq1[letter]++;
        } else {
            freq1[letter] = 1;
        }
    }

    for (let letter of t) {
        if (freq2[letter]) {
            freq2[letter]++;
        } else {
            freq2[letter] = 1;
        }
    }

    let entries1 = Object.entries(freq1);
    let entries2 = Object.entries(freq2);

    if (entries1.length !== entries2.length) return false;

    entries1.sort();
    entries2.sort();

    for (let i = 0; i < entries1.length; i++) {
        if (entries1[i][0] !== entries2[i][0] || entries1[i][1] !== entries2[i][1]) return false;
    }

    return true;
};
