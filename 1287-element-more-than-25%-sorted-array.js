// see py file for thought process

var findSpecialInteger = function(arr) {
    let n = arr.length;
    let freq = {};

    for (let i = 0; i < n; i++) {
        let num = arr[i];

        if (!freq[num]) {
            freq[num] = 1;
            if (freq[num]/n > 0.25) return num;
        } else {
            freq[num]++;
            if (freq[num]/n > 0.25) return num;
        }
    }
};
