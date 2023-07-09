/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.



Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

/*
O(n)
1.) sort nums numerically
2.) if the first number isn't 0, return 0
3.) otherwise iterate through nums and return the missing element
4.) if loop completes, return the last element + 1
*/

var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);

    if (nums[0] !== 0) return 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            return nums[i] + 1;
        }
    }

    return nums[nums.length - 1] + 1;
};

/*
really slow O(n^2)
1.) iterate through 0 to n
2.) if current number is not included in nums, return it
*/

var slowMissingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) return i;
    }
};
