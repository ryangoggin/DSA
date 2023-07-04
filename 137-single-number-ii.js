/*
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,3,2]
Output: 3

Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
*/

/*
1.) get frequency of all numbers in a POJO
2.) convert POJO to entries
3.) iterate over entries, return the number who has 1 for the frequency
*/

var singleNumber = function(nums) {
    let frequency = {};

    for (let num of nums) {
        if (!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }

    let entries = Object.entries(frequency);

    for (let entry of entries) {
        if (entry[1] == 1) return entry[0];
    }
};
