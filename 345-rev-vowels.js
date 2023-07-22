/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"

Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/

/*
1.) make a set of vowels for quick lookup
2.) 2 pointers to swap vowels
3.) turn string into an array
4.) while left and right pointer don't overlap, swap letters once both pointers are on vowels
5.) after iterating, return the array joined back together
*/

var reverseVowels = function(s) {
    let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    let left = 0;
    let right = s.length - 1;

    let letters = s.split("");

    while (left < right) {
        if (vowels.has(letters[left]) && vowels.has(letters[right])) {
            let tmp = letters[left];
            letters[left] = letters[right];
            letters[right] = tmp;
            left++;
            right--;
        } else if (vowels.has(letters[left])) {
            right--;
        } else if (vowels.has(letters[right])) {
            left++;
        } else {
            left++;
            right--;
        }
    }

    return letters.join("");
};
