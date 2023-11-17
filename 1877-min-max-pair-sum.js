// see py file for thought process

var minPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let res = 0;
    let n = nums.length;

    for (let i = 0; i < Math.floor(nums.length/2); i++) {
        res = Math.max(res, nums[i] + nums[n - 1 - i]);
    }

    return res;
};
