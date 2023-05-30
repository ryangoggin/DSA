/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

/*
FASTER SOLUTION - SLIDING WINDOW
1.) if a zero is encountered, decrement k
2.) if the start was a 0 before incrementing, incrememnt k
3.) if k goes below 0, increment the start
4.) increment end regardless
5.) return the difference between the end and start once the loop finishes
*/

var longestOnes = function(nums, k) {
    let start = 0
    let end = 0;

    while(end < nums.length) {
        if(nums[end] === 0) k--;

        if(k < 0) {
            if(nums[start] === 0) k++;
            start++;
        }

        end++;
    }

    return end-start;
};

/*
INCREDIBLY SLOW SOLUTION
1.) have a max 1s, 1s counter, and a 0s counter
2.) have a start pointer and an end pointer
3.) iterate over nums while end is not the last element of nums
4.) start and end start at the same element, if end is a 1 incrememnt the ones counter, always incrememnt end
5.) if end is a 0 increment the zeroes counter, increment end if zeros counter is less than or equal to k
6.) increment start and set end to start if zeros count exceeds k
7.) set max ones to the max between ones counter and max ones
8.) return max ones after the loop
*/
var slowLongestOnes = function(nums, k) {
    let maxOnes = 0;
    let ones = 0;
    let zeros = 0;
    let start = 0;
    let end = 0;

    while (end < nums.length) {
        if (nums[end] === 1) {
            ones++;
            maxOnes = Math.max(ones, maxOnes);
            end++;
        } else if (nums[end] === 0 && zeros < k) {
            ones++;
            zeros++;
            maxOnes = Math.max(ones, maxOnes);
            end++;
        } else {
            start++;
            end = start;
            ones = 0;
            zeros = 0;
        }
    }

    return maxOnes;
};
