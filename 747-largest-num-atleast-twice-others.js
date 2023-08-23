/*
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.

Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
*/

/*
1.) make a deep copy of nums and sort in descending order
2.) check if first index is double or greater of second index
3.) if it is return the index of the first index in nums
4.) otherwise return -1
*/

var dominantIndex = function(nums) {
    let sorted = [...nums];
    sorted.sort((a,b) => b-a);

    if (sorted[0] >= sorted[1]*2) {
        return nums.indexOf(sorted[0]);
    } else {
        return -1
    }
};
