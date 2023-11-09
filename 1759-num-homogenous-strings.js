// see py file for thought process

var countHomogenous = function(s) {
    let left = 0;
    let res = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[left] === s[right]) {
            res += right - left + 1;
        } else {
            res++;
            left = right;
        }
    }

    return res % (10**9 + 7);
};
