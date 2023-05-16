/*
1.) set up the class so the attributes of the class so that k is k and nums is sorted (numerically) nums
2.) in the add method, push val into nums
3.) sort nums numerically again (horribly inefficient, look into heaps more)
4.) return the kth largest element (index is difference between the length of nums and k)
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort((a, b) => a - b);

    return this.nums[this.nums.length - this.k]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
