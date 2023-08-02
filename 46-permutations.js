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
dfs
1.) dfs helper used, takes the current permutation and an array to track which elements have been used
2.) if the current permutation's the same length as nums, push a deep copy of it into res and return
3.) otherwise, iterate through nums
4.) each iteration check if the current index hasn't been used
4a.) if it hasn't push the current element at that index into the current permutation and set that index of used to true
4b.) then recursively call dfs on the current permutation and used
4c.) afterwards, pop off the last element of the current permutation and set that index back to false
5.) call the dfs helper on an empty array and an array of the length of nums filled with false
6.) return res
*/

var permute = function(nums) {
    let res = [];

    function dfs(currPermutation, used) {
        if (currPermutation.length === nums.length) {
            res.push([...currPermutation]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                currPermutation.push(nums[i]);
                used[i] = true;
                dfs(currPermutation, used);
                currPermutation.pop();
                used[i] = false;
            }
        }
    }

    dfs([], Array(nums.length).fill(false));
    return res
};

/*
backtracking
1.) use a backtrack helper that takes in a nums array and the current permutation
2.) if nums is empty, the permutation is made, push it into res and return
3.) otherwise, iterate through nums
3a.) make a slice of numbers to the left of the current element and another slice of the numbers to the right of the current element
3b.) recursively call backtrack
3c.) nums is left spread into a new array followed by right spread into that same array
3d.) currPermutation is a new array with pervious currPermutation spread followed by the current element in nums
4.) call backtrack on nums and an empty array
5.) return res

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
