/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"
Output: 1

Example 2:

Input: text = "loonbalxballpoon"
Output: 2

Example 3:

Input: text = "leetcode"
Output: 0
*/

/*
O(n) - n is length of text
1.) initialize res at Inifnity
2.) create a balloon frequency object that starts with all the letters of balloon as a key w/ values starting at 0
3.) iterate across the length of text
4.) if the letter is one of the keys in the frequency object, increment that key's value
5.) convert the object to it's entries and iterate over them
6.) if the key is l or o, divide it's frequency by 2 and round down, otherwise it's frequency is the value
7.) set res to the minimum between itself and the calculate frequency as the lowest of the letter's frequency is the max number of times you can spell balloon
8.) return res
*/

var maxNumberOfBalloons = function(text) {
    let res = Infinity;

    let balloonFreq = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0
    };

    for (let i = 0; i < text.length; i++) {
        if (balloonFreq[text[i]] !== undefined) {
            balloonFreq[text[i]]++;
        }
    }

    let entries = Object.entries(balloonFreq);

    for (let i = 0; i < entries.length; i++) {
        let freq;

        if (entries[i][0] === "l" || entries[i][0] === "o") {
            freq = Math.floor(entries[i][1] / 2);
        } else {
            freq = entries[i][1];
        }

        res = Math.min(res, freq);
    }

    return res;
};
