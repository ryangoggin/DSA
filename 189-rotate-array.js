/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/*
1.) if k is greater than length of nums, rotate w/ for loop
2.) otherwise use splice
*/

var rotate = function(nums, k) {
    if (k > nums.length) {
        for (let i = 0; i < k; i++) {
            let num = nums.pop();
            nums.unshift(num);
        }
        return nums;
    } else {
        let rotated = nums.splice(nums.length - k, k);
        nums.unshift(...rotated);

        return nums;
    }
};

/*
too slow, last test case times out...
1.) iterate k times
2.) pop off last item, unshift to front of the array
*/

var tooSlowRotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        let num = nums.pop();
        nums.unshift(num);
    }

    return nums
};
