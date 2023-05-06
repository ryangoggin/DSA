/*
given unsorted array of ints, nums, return length of longest consecutive elements
must be O(n)
*/

/*
0.) have 2 counters, current and max length of consecutives
1.) use sort to sort the ints in nums and make them unique w/ a set
2.) iterate of the nums (O(n))
3a.) check if num and next num are consecutive, increment curr length by 1 if true
3b.) set max length to the max between current and max
4.) reset current length to 1 if not
5.) return max length at the end of the loop
*/

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let currLen = 1;
    let maxLen = 1;

    let unique = new Set(nums);
    nums = Array.from(unique);
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === (nums[i+1] - 1)) {
            currLen++;
            maxLen = Math.max(currLen, maxLen);
        } else {
            currLen = 1;
        }
    }

    return maxLen
};
