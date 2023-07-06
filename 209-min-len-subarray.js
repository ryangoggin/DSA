/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

/*
sliding window solution
1.) set the pointers, min length to inifinity, and curr sum to 0
2.) iterate over nums while the last pointer is within the range of nums
3.) add the last pointer element to curr sum each iteration
4.) need to slide the window while the summ is greater than or equal to target
4a.) calculate the current length of the subarray (last - first + 1)
4b.) make min length the min between it and the current length
4c.) subtract the "first" element of the subarray and increment the first pointer
5.) after this while loop, increment last in the outer loop
6.) outside of the outer loop, return 0 if min length is still set to infinity, otherwise return min length
*/

var minSubArrayLen = function(target, nums) {
    let currSum = 0;
    let first = 0;
    let last = 0;
    let minLen = Infinity;

    while (last < nums.length) {
        currSum += nums[last];

        while (currSum >= target) {
            let currLen = last - first + 1;
            minLen = Math.min(currLen, minLen);
            currSum -= nums[first];
            first++;
        }
        last++;
    }

    if (minLen === Infinity) return 0;
    return minLen;
};
