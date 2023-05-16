// given an array of heights return the greatest area of water that could be held
// look at 11 on LC for visuals

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

/*
1.) store the max area in a variable, start it at 0
2.) make a left and right pointer starting at either end of the heights array
3.) while a viable container is made from the pointers (left < right), check the area made
4.) set the max to the max between max and current area
5.) increment left pointer if the left wall is the short side or decrement right pointer otherwise
6.) return max area after the loop exits
*/

var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let shortSide = Math.min(height[left], height[right]);
        let area = shortSide * (right - left);

        max = Math.max(max, area);

        if (height[left] < height[right]) left++;
        else right--;
    }

    return max;
};
