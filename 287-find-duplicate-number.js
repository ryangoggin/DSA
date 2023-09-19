/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
*/

/*
// time: ~O(n^2) where n is length of nums --> too slow to actually pass, only passes 57/58 test cases
1.) 2 pointer, check each nums combo w/ a while loop
2.) return when there's a match
*/

var findDuplicate = function(nums) {
    if (nums.length <= 2) return nums[0];

    let first = 0;
    let second = 1;

    while (first < nums.length - 1) {
        if (nums[first] === nums[second]) return nums[first];

        if (second === nums.length - 1) {
            first++;
            second = first + 1;
        } else {
            second++;
        }
    }
};
