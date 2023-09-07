/*

*/

/*
O(nlog(n)) where n is # of vowels in s
1.) turn s to an array
2.) have arrays to store upper and lower case vowels and two sets that hold all upper and lower case vowels
3.) iterate across s and add vowels to their appropriate array based on casing and mark their spot with *
4.) sort both arrays
5.) iterate across s again, shift in from lower then upper vowel arrays
6.) return s joined back together
*/

var sortVowels = function(s) {
    s = s.split("");

    let lowerSVowels = [];
    let upperSVowels = [];
    let lowerVowels = new Set(["a", "e", "i", "o", "u"]);
    let upperVowels = new Set(["A", "E", "I", "O", "U"]);

    for (let i = 0; i < s.length; i++) {
        if (lowerVowels.has(s[i])) {
            lowerSVowels.push(s[i]);
            s[i] = "*";
        }

        if (upperVowels.has(s[i])) {
            upperSVowels.push(s[i]);
            s[i] = "*"
        }
    }

    lowerSVowels.sort();
    upperSVowels.sort();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*" && upperSVowels.length > 0) {
            s[i] = upperSVowels.shift();
        } else if (s[i] === '*') {
            s[i] = lowerSVowels.shift();
        }
    }

    return s.join("");
};
