/*
return all unique triplets that add up to target
*/

var threeSum = function(nums) {
    let res = [];

    if (nums.length < 3) return [];

    nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return res;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return res;
};

/*
this is VERY inefficient --> SO SLOW LEETCODE DOESN'T ACCEPT IT (only 308/312 tests pass in the time limit LOL)
0.) have an array to store all triplets
1.) use 3 pointers (first, second third)
2.) while first is less than or equal to the 3rd to last index, check if 3 numbers from nums add up to target
3.) if they do, push the array of triplets into res
4.) return res after the loop
*/

// time: almost O(n^3) where n is length of nums?

var slowThreeSum = function(nums) {
    let res = [];
    let unique = new Set();

    let first = 0;
    let second = 1;
    let third = 2;

    if (nums.length < 3) return [];

    while(first <= nums.length - 3) {
        if (nums[first] + nums[second] + nums[third] === 0) {
            let triplet = [nums[first], nums[second], nums[third]];
            let tripletStr = triplet.sort().toString();

            if (!unique.has(tripletStr)) {
                unique.add(tripletStr)
                res.push(triplet);
            }
        }

        if (third !== nums.length - 1) {
            third++;
        } else if (second !== nums.length - 2) {
            second++;
            third = second + 1;
        } else {
            first ++;
            second = first + 1;
            third = second + 1;
        }
    }

    return res;
};
