// see py file for thought process

var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((a,b) => {
        return a+b;
    }, -nums[0]);

    if (leftSum === rightSum) return 0;

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
        rightSum -= nums[i+1];

        if (leftSum === rightSum) return i+1;
    }

    return -1;
};
