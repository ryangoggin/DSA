/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1
*/

/*
1.) when doing binary search, one of the sides of mid will be sorted
2.) use binary search logic to see if the target is in the sorted half
2a.) otherwise it is in the unsorted half
3.) if the hi and lo pointers cross then the while loop exits and the target isn't in the array, return -1
*/

var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo+hi)/2);

        if (nums[mid] === target) return mid;

        // the left side is the sorted half
        if (nums[lo] <= nums[mid]) {
            // binary search on the left half because it is sorted
            if (nums[lo] <= target && target <= nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        // the right side is the sorted half
        else {
            // binary search on the right half because it is sorted
            if (nums[mid] <= target && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }

    return -1;
};
