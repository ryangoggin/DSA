// see py file for thought process

var NumArray = function(nums) {
    this.nums = nums;
    this.sum = [];
    let currSum = 0;
    for (let num of nums) {
        currSum += num;
        this.sum.push(currSum);
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) {
        return this.sum[right];
    }
    return this.sum[right] - this.sum[left-1];
};
