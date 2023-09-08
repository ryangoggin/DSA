// see py file for thought process

var frequencySort = function(s) {
    let res = "";
    let freq = {};

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]]) {
            freq[s[i]]++;
        } else {
            freq[s[i]] = 1;
        }
    }

    entries = Object.entries(freq);
    entries.sort((a,b) => b[1] - a[1]);

    for (let entry of entries) {
        while (entry[1] > 0) {
            res += entry[0];
            entry[1]--;
        }
    }

    return res;
};
