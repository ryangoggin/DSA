/*
    given set of integers nums, originally contains 1 to n
    one number in s got duped to another number in the set
    return [duplicated number, removed number]
*/

/*
1.) use a set to get all unique integers in nums
2.) use a POJO to track integer freq
3.) iterate for i from 1 to n
4.) if integer at index i isn't in POJO, add that number to dictionary as key with value of 1
5.) if it is in the POJO, make that integer the 0 index of res array
6.) on each index of nums, also check if that value is in the set
7.) if not, set the 1 index of the res array to that value
8.) return res after iterating
*/

var findErrorNums = function(nums) {
    let unique = new Set(nums);
    let freq = {};
    let res = ["", ""];

    for (let i = 1; i <= nums.length; i++) {
        if (freq[nums[i-1]]) {
            res[0] = nums[i-1];
            freq[nums[i-1]]++;
        } else {
            freq[nums[i-1]] = 1;
        }

        if (!unique.has(i)) {
            res[1] = i;
        }
    }

    return res;
};
