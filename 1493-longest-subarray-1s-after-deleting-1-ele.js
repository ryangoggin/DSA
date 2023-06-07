// see py file for thought process

var longestSubarray = function(nums) {
    let k = 1;
    let start = 0;
    let end = 0;

    while (end < nums.length) {
        if (nums[end] === 0) k--;

        if (k < 0) {
            if (nums[start] === 0) k++;
            start++;
        }
        end++;
    }

    return end - start - 1;
};
