// see py file for thought process

var numIdenticalPairs = function(nums) {
    let freq = {};
    let res = 0;

    for (let num of nums) {
        if (freq[num]) {
            res += freq[num];
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    return res;
};
