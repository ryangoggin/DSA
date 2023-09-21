/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:

Input: s = "Hello"
Output: "hello"

Example 2:

Input: s = "here"
Output: "here"

Example 3:

Input: s = "LOVELY"
Output: "lovely"
*/

/*
1.) create a POJO to w/ upper case as the keys and lowercase as the values
2.) splite s and iterate over its letters
3.) if any of the letters are keys in the POJO, replace it with the corresponding value
4.) return the modified array joined back together
*/

var toLowerCase = function(s) {
    let lowercaseConv = {
        'A': 'a',
        'B': 'b',
        'C': 'c',
        'D': 'd',
        'E': 'e',
        'F': 'f',
        'G': 'g',
        'H': 'h',
        'I': 'i',
        'J': 'j',
        'K': 'k',
        'L': 'l',
        'M': 'm',
        'N': 'n',
        'O': 'o',
        'P': 'p',
        'Q': 'q',
        'R': 'r',
        'S': 's',
        'T': 't',
        'U': 'u',
        'V': 'v',
        'W': 'w',
        "X": 'x',
        'Y': 'y',
        'Z': 'z'
    };

    let sArr = s.split("");

    for (let i = 0; i < sArr.length; i++) {
        if (lowercaseConv[sArr[i]]) {
            sArr[i] = lowercaseConv[sArr[i]];
        }
    }

    return sArr.join("");
};
