/*
given array of strings, group the anagrams together, can return the answer in any order
*/

/*
look at py for general thought process
*/

var groupAnagrams = function(strs) {
    let anagrams = {};

    for (word of strs) {
        let anagram = word.split("").sort().join("");
        if (!anagrams[anagram]) {
            anagrams[anagram] = [word];
        } else {
            anagrams[anagram].push(word);
        }
    }

    return Object.values(anagrams);
};
