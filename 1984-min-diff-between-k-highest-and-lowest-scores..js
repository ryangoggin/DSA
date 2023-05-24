/*
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.



Example 1:
Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student:
- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
The minimum possible difference is 0.

Example 2:
Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.
*/

/*
0.) start min difference at infinity
1.) sort nums
2.) iterate over sorted nums until the kth to last element
3.) take a slice of sorted nums starting at the ith element w/ k elements in it
4.) set min difference to the min of the current differ and min diff
5.) return min diff at end of the loop
*/

var minimumDifference = function(nums, k) {
    if (nums.length < 2) return 0;

    let minDiff = Infinity;
    nums.sort((a,b) => a-b);

    for (let i = 0; i <= nums.length - k; i ++) {
        let kScores = nums.slice(i, i + k);
        let diff = kScores[k - 1] - kScores[0];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};


// FASTER TO INDEX ABOVE INSTEAD OF Math.max and Math.min
var slowerMinimumDifference = function(nums, k) {
    if (nums.length < 2) return 0;

    let minDiff = Infinity;
    nums.sort((a,b) => a-b);

    for (let i = 0; i <= nums.length - k; i ++) {
        let kScores = nums.slice(i, i + k);
        let diff = Math.max(...kScores) - Math.min(...kScores);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};
