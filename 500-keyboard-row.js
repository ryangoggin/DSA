/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:

Input: words = ["omk"]
Output: []

Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
*/

/*
1.) make a set of all characters for each row (3 sets)
2.) make a res array to hold all the one row words
3.) initialize a set variable to set based on a word's first letter
4.) check which set the first letter is in and set the set variable to the appropriate set
5.) iterate over each character of that word and return false if any characters are in a different row than the first letter
6.) return true if iteration completes
7.) iterate over all the words, run the helper on each word
8.) push the word into the res array if it returns true from the helper
9.) return the res array
*/

var findWords = function(words) {
    let res = [];

    let topRow = new Set(["q","Q","w","W","e","E","r","R","t","T","y","Y","u","U","i","I","o","O","p","P"]);
    let midRow = new Set(["a","A","s","S","d","D","f","F","g","G","h","H","j","J","k","K","l","L"]);
    let botRow = new Set(["z","Z","x","X","c","C","v","V","b","B","n","N","m","M"]);

    function oneRow(word) {
        let chars = word.split("");
        let set;

        if (topRow.has(chars[0])) {
            set = topRow;
        } else if (midRow.has(chars[0])) {
            set = midRow;
        } else {
            set = botRow;
        }

        for (let i = 1; i < chars.length; i++) {
            if (!set.has(chars[i])) return false;
        }

        return true;
    }

    for (let word of words) {
        if (oneRow(word)) res.push(word);
    }

    return res;
};
