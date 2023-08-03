/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

/*
1.) create a dictionary to hold the number to word mapping
2.) create a res array to hold all combos
3.) create a comboMaker helper to populate res, takes digits and current combo as args
4.) base case of the helper is when there are no digits (empty string)
4a.) if the current combo is empty, just return
4b.) if there are chracters in the current combo, push this string into res and return
5.) otherwise, get the possible letters of the first number in digits
6.) iterate over these
6a.) concatenate the current letter onto the current combo
6b.) recursively call the helper on a slice of digits with that first number removed and the current combo
6c.) after the recursive call, remove the letter that was just added so the next combo can be started
7.) run the combo maker helper on digits and an empty string
8.) return res

*/

var letterCombinations = function(digits) {
    let numberMapping = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let res = [];

    function comboMaker(digits, currentCombo) {
        if (digits === "") {
            if (currentCombo === "") {
                return;
            } else {
                res.push(currentCombo);
                return;
            }

        }

        let firstLetters = numberMapping[digits[0]];

        for (let i = 0; i < firstLetters.length; i++) {
            currentCombo += firstLetters[i];
            comboMaker(digits.slice(1, digits.length), currentCombo);
            currentCombo = currentCombo.slice(0, currentCombo.length - 1);
        }
    }

    comboMaker(digits, "");
    return res
};
