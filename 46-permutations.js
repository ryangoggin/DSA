/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]
*/

/*
backtracking
*/

var permute = function(nums) {
    let res = [];

    function backtrack(nums, currPermutation) {
        if (nums.length === 0) {
            res.push(currPermutation);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            let leftNums = nums.slice(0, i);
            let rightNums = nums.slice(i+1);
            backtrack([...leftNums, ...rightNums], [...currPermutation, nums[i]]);
        }
    }

    backtrack(nums, []);
    return res
};
