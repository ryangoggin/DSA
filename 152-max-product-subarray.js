// see py file for thought process

var maxProduct = function(nums) {
    let currMin = 1;
    let currMax = 1;
    let res = nums[0];

    for (let num of nums) {
        vals = [num, num*currMin, num*currMax];
        currMin = Math.min(...vals);
        currMax = Math.max(...vals);
        res = Math.max(res, currMax);
    }

    return res;
};
