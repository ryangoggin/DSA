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
faster O(n) one pass solution
1.) have a first and second variable both start at negative infinity
2.) have a res variable start at 0
3.) iterate over nums
4.) if the current num is greater than first, set second to the former first, set first to current num, and set res to i
5.) otherwise if current num is greater than second but not first, set second to that num
6.) after iterating, return a ternary where the conditional is first being greater than or equal to 2 times second
7.) if it is, return res, otherwise return -1
*/

var dominantIndex = function(nums) {
    let first = -Infinity;
    let second= -Infinity;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
            res = i;
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }

    return first >= 2*second ? res : -1;
};

/*
slower O(n*log(n)) becuase it uses sort
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
