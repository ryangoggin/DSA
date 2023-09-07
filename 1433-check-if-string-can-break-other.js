/*
Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

Example 1:

Input: s1 = "abc", s2 = "xya"
Output: true
Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".

Example 2:

Input: s1 = "abe", s2 = "acd"
Output: false
Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

Example 3:

Input: s1 = "leetcodee", s2 = "interview"
Output: true
*/

/*
O(n*log(n)) where n is the length of the strings (sort is used on their arrays)
1.) split each string to an array and sort it
2.) iterate across both and check for if s1 can break s2, the loop if not
2a.) have a counter increment each letter of s1 that can break s2, if the loop finishes and that counter is the the length of the strings that means s1 could break s2 --> return true
3.) repeat but check if s2 can break s1
4.) return false if not, if the second loop completes then s2 can break s1, return true
*/

var checkIfCanBreak = function(s1, s2) {
    let arr1 = s1.split("");
    let arr2 = s2.split("");

    arr1.sort();
    arr2.sort();

    let first_counter = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < arr2[i]) {
            break;
        }
        first_counter++;
    }

    if (first_counter === arr1.length) return true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return false;
        }
    }

    return true;
};
