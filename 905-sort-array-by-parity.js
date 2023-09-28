/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]
*/

/*
time - O(n)
1.) make a res array
2.) iterate over nums
3.) put even numbers into the front of res (unshift)
4.) put odd numbers into the back of res (push)
5.) return res
*/

var sortArrayByParity = function(nums) {
    let res = [];

    for (let num of nums) {
        if (num % 2 === 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }

    return res;
};
