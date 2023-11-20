/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

/*
2 Pointer O(n)
1.) start w/ pointers at either end of the height array
2.) move inwards depending on which pointer has a higher height
3.) increment res by the diff between the current height and that sides current max
4.) return res once the left and right pointers overlap
*/

var trap = function(height) {
    if (height.length === 0 || height == null) return 0;

    let res = 0;

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        if (height[left] < leftMax) {
            res += leftMax - height[left];
        }

        rightMax = Math.max(rightMax, height[right]);
        if (height[right] < rightMax) {
            res += rightMax - height[right];
        }

        height[left] < height[right] ? left++ : right--;
    }

    return res;
};

/*
brute force O(n^2) to calculate the height of water at each element of the height array
TOO SLOW
*/

var trap = function(height) {
    if (height.length === 0) return 0;

    let res = 0;

    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;

        for (let j = 0; j < i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }

        for (let j = i+1; j< height.length; j++) {
            rightMax = Math.max(rightMax,height[j]);
        }

        let water = Math.min(leftMax, rightMax) - height[i];
        if (water > 0) res += water;
    }

    return res;
};
