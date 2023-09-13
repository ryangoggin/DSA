// see py file for thought process

var Solution = function(nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    let indices = [];
    let res = [];

    for (let i = 0; i < this.nums.length; i++) {
        indices.push(i);
    }

    while (indices.length > 0) {
        index = getRandomInt(indices.length);
        res.push(this.nums[indices[index]]);
        indices.splice(index, 1);
    }

    return res;
};
