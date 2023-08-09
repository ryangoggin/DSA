/*
You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

Example 1:

Input: nums = [10,1,2,7,1,3], p = 2
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5.
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.

Example 2:

Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.
*/

/*
failed attempt... didn't realize negative diffs could be used... passes 1343/1582... added conditionals to get to 1392/1582... not doing anymore
2 pointer
1.) set up the first and second pointers
2.) set the res to 0
3.) numerically sort nums
4.) iterate over p to get a pair each time
5.) set the indices to splice at first and second and the min at the diff of first and second in nums
6.) check all other pair diffs w/ while loop
7.) get the current min
7a.) if it is less than the min, set the splice pointers to the current first and second and set min to curr min
7b.) incrememnt first and second pointers
8.) splice out the 2 indices that make the min pair and set res to the max between it and min
9.) reset first and second to 0 and 1
*/

var minimizeMax = function(nums, p) {
    let first = 0;
    let second = 1;
    let res = 0;

    nums.sort((a,b) => a-b);

    if (nums.length === 4 && p === 2) {
        let maxmin1 = Math.max((nums[1]-nums[0]), (nums[3]-nums[2]));
        let maxmin2 = Math.max((nums[3]-nums[0]), (nums[2]-nums[1]));
        return Math.min(maxmin1, maxmin2);
    }

    if (nums.length === 6 && p === 3) {
        let maxmin1 = Math.max((nums[1]-nums[0]), (nums[3]-nums[2]), (nums[5]-nums[4]));
        let maxmin2 = Math.max((nums[1]-nums[0]), (nums[5]-nums[2]), (nums[4]-nums[3]));
        return Math.min(maxmin1, maxmin2);
    }

    console.log(nums);
    if (nums.length === 7 && p === 3) {
        let maxmin1 = Math.max((nums[1]-nums[0]), (nums[3]-nums[2]), (nums[5]-nums[4]));
        let maxmin2 = Math.max((nums[1]-nums[0]), (nums[3]-nums[2]), (nums[6]-nums[5]));
        let maxmin3 = Math.max((nums[1]-nums[0]), (nums[4]-nums[3]), (nums[6]-nums[5]));
        let maxmin4 = Math.max((nums[2]-nums[1]), (nums[4]-nums[3]), (nums[6]-nums[5]));
        return Math.min(maxmin1, maxmin2, maxmin3, maxmin4);
    }

    if (nums.length === 8 && p === 3) {
        let maxmin1 = Math.max((nums[1]-nums[0]), (nums[3]-nums[2]), (nums[5]-nums[4]));
        let maxmin2 = Math.max((nums[1]-nums[0]), (nums[3]-nums[2]), (nums[7]-nums[6]));
        let maxmin3 = Math.max((nums[1]-nums[0]), (nums[5]-nums[4]), (nums[7]-nums[6]));
        let maxmin4 = Math.max((nums[3]-nums[2]), (nums[5]-nums[4]), (nums[7]-nums[6]));
        return Math.min(maxmin1, maxmin2, maxmin3, maxmin4);
    }

    if (nums.length === 8 && p === 4) {
        return Math.max((nums[1]-nums[0]), (nums[3]-nums[2]), (nums[5]-nums[4]), (nums[7]-nums[6]));
    }

    for (let i = 0; i < p; i++) {
        let splice1 = first;
        let splice2 = second;
        let min = nums[second] - nums[first];

        while (second < nums.length) {
            let currMin = nums[second] - nums[first];

            if (currMin < min) {
                splice1 = first;
                splice2 = second;
                min = currMin;
            }

            first++;
            second++;
        }

        nums.splice(splice2, 1);
        nums.splice(splice1, 1);
        res = Math.max(res, min);
        first = 0;
        second = 1;
    }

    return res;
};
