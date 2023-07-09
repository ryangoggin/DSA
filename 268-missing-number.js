/*

*/

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
