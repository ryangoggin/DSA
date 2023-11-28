/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

/*
time - O(log(m+n))
two pointers + median formula
1.) use 3 while loops to merge nums1 and nums2 using pointers
2.) after merging the arrays, return the median based on if merged is odd or even length
2a.) odd it is the rounded down midpoint
2b.) even it is the average of the two midpoints
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let pointer1 = 0;
    let pointer2 = 0;
    let merged = [];

    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] < nums2[pointer2]) {
            merged.push(nums1[pointer1]);
            pointer1++;
        } else {
            merged.push(nums2[pointer2++]);
        }
    }

    while (pointer1 < nums1.length) {
        merged.push(nums1[pointer1]);
        pointer1++;
    }

    while (pointer2 < nums2.length) {
        merged.push(nums2[pointer2]);
        pointer2++;
    }

    let mid = (m+n)/2;

    if ((m+n) % 2 === 1) {
        return merged[Math.floor(mid)];
    } else {
        return (merged[mid - 1] + merged[mid]) / 2;
    }
};
