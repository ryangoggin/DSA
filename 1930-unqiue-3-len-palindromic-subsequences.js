// see py file for thought process

var countPalindromicSubsequence = function(s) {
    let firstOccurrence = new Array(26).fill(Infinity);
    let lastOccurrence = new Array(26).fill(-Infinity);

    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        firstOccurrence[idx] = Math.min(firstOccurrence[idx], i);
        lastOccurrence[idx] = Math.max(lastOccurrence[idx], i);
    }

    let res = 0;

    for (let i = 0; i < 26; i++) {
        if (firstOccurrence[i] === Infinity || lastOccurrence[i] === -Infinity) {
            continue;
        }

        let unique = new Set();

        for (let j = firstOccurrence[i] + 1; j < lastOccurrence[i]; j++) {
            unique.add(s[j]);
        }
        res += unique.size;
    }

    return res;
};
