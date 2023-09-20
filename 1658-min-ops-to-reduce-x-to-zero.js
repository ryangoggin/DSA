// see py file for thought process

var minOperations = function(nums, x) {
    let target = nums.reduce(function(a, b) {
        return a+b;
    }, 0) - x;

    let currSum = 0;
    let maxLen = 0;
    let start = 0;
    let possible = false;

    for (let end = 0; end < nums.length; end++) {
        currSum += nums[end];

        while (start <= end && currSum > target) {
            currSum -= nums[start];
            start++;
        }

        if (currSum === target) {
            possible = true;
            maxLen = Math.max(maxLen, end - start + 1);
        }
    }

    if (possible) {
        return nums.length - maxLen;
    } else {
        return -1;
    }
};
