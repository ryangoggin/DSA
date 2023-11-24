/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true
*/

/*
time: O(n)
1.) use 2 pointers, left to check strictly increasing, right to check strictly decreasing
2.) while either can keep increasing or decreasing, incrememnt left and right accordingly
3.) once each pointer gets to its final spot check for 3 edge cases that invalidate the array from being a mountain:
3a.) the whole thing was strictly increasing (left got to the right end)
3b.) the whole thing was strictly decreasing (right got to the left end)
3c.) left and right pointers did not end at the same spot
4.) otherwise the array is a mountain and you can return true
*/

var validMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        if (arr[left] < arr[left + 1]) {
            left++;
        }

        if (arr[right] < arr[right - 1]) {
            right--;
        }
    }

    if (left !== right || left === arr.length - 1 || right === 0) return false;

    return true;
};
