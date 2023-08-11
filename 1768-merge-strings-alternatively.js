// see py file for thought process

var mergeAlternately = function(word1, word2) {
    let arr1 = Array.from(word1);
    let arr2 = Array.from(word2);
    let res = "";

    while (arr1.length && arr2.length) {
        res += arr1.shift();
        res += arr2.shift();
    }

    arr1.length ? res += arr1.join("") : res += arr2.join("");

    return res


};
