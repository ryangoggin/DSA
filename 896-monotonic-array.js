/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:

Input: nums = [1,2,2,3]
Output: true

Example 2:

Input: nums = [6,5,4,4]
Output: true

Example 3:

Input: nums = [1,3,2]
Output: false
*/

/*
time: O(n) where n is length of nums
1.) decide if you're checking for increasing or decreasing by comparing first and last elements
2.) then depending on which, iterate from first to second to last element and check if the elements are increasing or decreasing
3.) return false once there is a break in the pattern, otherise return true at the end of the loop
*/

var isMonotonic = function(nums) {
    if (nums[0] <= nums[nums.length - 1]) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i+1]) return false;
        }
        return true;
    } else {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i+1]) return false;
        }
        return true;
    }
};
