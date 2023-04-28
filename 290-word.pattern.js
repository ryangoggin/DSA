// look at python file for reasoning

var wordPattern = function(pattern, s) {
    let letters = pattern.split("");
    let words = s.split(" ");

    if (words.length !== letters.length) return false;

    let patternMatch = {};

    for (let i = 0; i < words.length; i++) {
        if (patternMatch[pattern[i]]) {
            if (patternMatch[pattern[i]] !== words[i]) return false;
        } else {
            patternMatch[pattern[i]] = words[i]
        }
    }

    let uniqueWords = new Set(words);
    let uniqueLetters = new Set(letters);

    if (uniqueWords.size !== uniqueLetters.size) return false;
    return true
};
