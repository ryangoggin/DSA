/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

/*
sort needs to be in place --> do bubble sort even though it's slow
1.) set up  a counter at 0
2.) iterate up to the second to last num in nums by index
3.) it current num is greater than next num, swap by setting current num to a temp variable
3a.) current become the next num, next num becomes the temp variable
4.) increment the counter
5.) if there were no swaps iterating over nums (counter is 0) then nums is sorted, return nums
6.) otherwise recursively call the function on nums
*/

var sortColors = function(nums) {
    let counter = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i+1]) {
            let tmp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = tmp;
            counter++;
        }
    }

    if (counter === 0) return nums;

    sortColors(nums);
};
