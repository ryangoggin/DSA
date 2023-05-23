/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"


Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/

/*
1.) make a res array to hold all the ranges
2.) have a variable to track the start of a range starting with the first num of nums
3.) iterate over nums, checking for if the number and the next number aren't in the same range (consecutive)
4.) if they aren't, check if the number is the start of the range or not, if it is push the number as a strings, if not push 'range start -> current number', set range start to the next num in nums
5.) return res after the loop
*/

var summaryRanges = function(nums) {
    let res = [];
    let rangeStart = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            if (nums[i] === rangeStart) {
                res.push(nums[i].toString());
            } else {
                let range = `${rangeStart}->${nums[i]}`;
                res.push(range);
            }
            rangeStart = nums[i + 1]
        }
    }

    return res;
};
