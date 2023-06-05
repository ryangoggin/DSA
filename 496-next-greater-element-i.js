/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

/*
1.) make a res array
2.) iterate over nums2
3.)  while the stack has elements in it AND the last element of the stack is greater than the current element in nums 2,
3a.) make the key in map the poppped off value from the stack and the value the current element in nums 2
4.) push the current element in nums2 into the stack
5.) create res array by using the map method over nums1 and mapping to either the current num's value in the map or -1 b/c it isn't in the map
6.) return res
*/

var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            map[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }

    let res = nums1.map(num => map[num] || -1);

    return res;
};
