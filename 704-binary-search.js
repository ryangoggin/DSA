/*
given an array of ints, nums, sorted in ascending order and an int, target
write a fxn to search for target in nums and return its index
otherwise, return -1
*/

/*
1.) use a left and right pointer and use them to find a middle index
2.) search for the target with mid while left and right don't overlap
3.) if target is less than mid, move right pointer 1 to the left of previous mid
4.) if target is greater than mid, move left pointer 1 to the right of previous mid
5.) if target is at mid, return mid
6.) return -1 outside the loop because target isn't found at that point
*/

// time: O(log(n))
// space: O(n)

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid
        }
    }

    return -1;
};
