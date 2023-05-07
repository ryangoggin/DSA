/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside
the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements
denote the elements that should be merged, and the last n elements are set to 0 and should be
ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/


// FASTER

/*
1.) replace all the 0s at the end of nums1 w/ nums2
2.) sort nums1
*/
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums2.length; i++) {
        nums1[i + m] = nums2[i];
    }

    nums1.sort((a,b) => a - b);
};



// THIS IS SLOWER
/*
1.) hold the first m elements of nums1 in a separate array (sacrifice some space complexity)
2.) 2 pointers over nums1 copy and nums2 and og nums 1
3.) iterate over nums1
4.) make the lesser of the 2 the i index of nums 1
5.) don't need to return og nums1
*/

var slowerMerge = function(nums1, m, nums2, n) {
    let copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        if ((copy[p1] <= nums2[p2] || nums2[p2] === undefined) && p1 < m) {
            nums1[i] = copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
};
