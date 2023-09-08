var romanToInt = function(s) {
    let res = 0;

    let numMap = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        };

    for (let i = 0; i < s.length; i++) {
        (s[i+1] && numMap[s[i]] < numMap[s[i+1]]) ? res -= numMap[s[i]] : res += numMap[s[i]];
    }
    return res;
};
