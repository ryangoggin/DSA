/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/*
1.) make hashmap of element frequencies
2.) get the entries of the object
3.) iterate over entries
4.) return the element once hitting the frequency that is greater than n / 2
*/

var majorityElement = function(nums) {
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
        if (entry[1] > (nums.length / 2)) return entry[0];
    }
};
