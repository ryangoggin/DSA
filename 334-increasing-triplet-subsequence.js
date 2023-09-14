/*
triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
*/

/*
O(n) time, O(1) space
1.) track first and second number of the subsequence while iterating over numbers
2.) set the second number to current when current is larger than first, otherwise first number is the current
3.) return true when current is larger than first and second numbers recorded
4.) if the loop completes, there is no increasing triplet subsequence --> return false
*/

var increasingTriplet = function(nums) {
    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for (let currentNumber of nums) {
        if (currentNumber > secondNumber && currentNumber > firstNumber) {
        return true;
        }
        if (currentNumber > firstNumber) {
        secondNumber = currentNumber;
        } else {
        firstNumber = currentNumber;
        }
    }
    return false;
};
