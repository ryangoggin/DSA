/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

/*
time: O(logn) - binary search
1.) check if first and last indices are the target, if they are return them in an array as everything in between is also the target
2.) set a found variable to false and initialize a foundPos, these will flag if the target is in the array and what index the binary search first found the target
3.) perform binary search, if the target is found set found to true and foundPos to mid and break the while loop
4.) outside the while loop, return [-1, -1] if the target wasn't found in the array
5.) otherwise initialize start and end variables at the foundPos
6.) while the element at the start index is target, decrement start
7.) while the element at the end index is target, increment end
8.) after both loops complete return [start + 1, end - 1] as they will go to the index before and after start using the above loops
*/

var searchRange = function(nums, target) {
    if (nums[0] === target && nums[nums.length - 1] === target) return [0, nums.length - 1];

    let found = false;
    let foundPos;
    let hi = nums.length - 1;
    let lo = 0;

    while (lo <= hi) {
        let mid = Math.floor((hi+lo)/2);
        console.log(hi, lo, mid);

        if (nums[mid] === target) {
            found = true;
            foundPos = mid;
            break
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    if (!found) return [-1, -1];

    let start = foundPos;
    let end = foundPos;

    while (nums[start] === target) {
        start--;
    }

    while (nums[end] === target) {
        end++;
    }

    return [start + 1, end - 1];
};
