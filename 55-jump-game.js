/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

/*
1.) track your index, i, and max jump, max (start both at 0)
2.) iterate while i is within nums index range
3.) update max each iteration to the higher between current max and current index plus that indexes max steps
4.) if max goes above the last index of nums, the last index can be reached so return true
5.) if max is ever less than or equal to i and the max steps at i is 0, the last index cannot be reached --> return false
6.) increment i
7.) if loop exits, return false
*/

var canJump = function(nums) {
    let i = 0;
    let max = 0;

    while (i < nums.length) {
        max = Math.max(max, i + nums[i]);

        if (max >= nums.length - 1) {
            return true;
        }

        if (max <= i && nums[i] === 0) {
            return false;
        }

        i++;
    }

    return false;
};
