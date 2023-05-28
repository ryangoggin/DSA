/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
*/

/*
0.) make answer equal to [[],[]]
1.) make a set for nums1 and a set for nums2 to allow for constant time searching
2.) make an array of the sets to allow for iteration over unique arrays
3a.) iterate over nums1, check if set for nums2 has that element from nums1
3b.) if it isn't in set for nums2, push that value into answer[0]
4a.) iterate over nums2, check if set for nums1 has that element from nums2
4b.) if it isn't in set for nums1, push that value into answer[1]
5.) return answer
*/

var findDifference = function(nums1, nums2) {
    let ans = [[], []];

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let unique1 = Array.from(set1);
    let unique2 = Array.from(set2);

    for (let i=0; i < unique1.length; i++) {
        if (!set2.has(unique1[i])) {
            ans[0].push(unique1[i]);
        }
    }

    for (let i=0; i < unique2.length; i++) {
        if (!set1.has(unique2[i])) {
            ans[1].push(unique2[i]);
        }
    }

    return ans;
};
