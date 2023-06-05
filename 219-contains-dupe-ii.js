/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

/*
use a hashmap
1.) set up a dictionary for a hashmap
2.) iterate through indices of nums
3.) if the diff between current index and the current num's index in the hashmap are <= k return try
4.) return false if loop completes
*/

var containsNearbyDuplicate = function(nums, k) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        if (i - hashmap[nums[i]] <= k) return true;

        hashmap[nums[i]] = i;
    }

    return false;
};

/*
Brute force slow solution that doesn't use hash map... O(n*k) where n is num of nums and k is the given value
only passes 20/54 test cases... they really want the hash map solution :(
1.) Iterate through nums
2.) check k indices away from current num
3.) return true if any of them match the num
4.) return false if loop completes
*/

var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= k; j++) {
            if (nums[i] === nums[i + j]) return true;
        }
    }

    return false;
};
