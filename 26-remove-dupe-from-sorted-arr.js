/*
given integer arr nums sorted in non-decreasing order
remove diplicates in-place
return # of unique elements
*/

/*
1.) make a set from nums already in nums
2.) iterate over nums checking if current num in the set
3.) if it is, splice it out of nums
4.) if it is not, add it to the set and continue
*/

// slower O(n+m)
var removeDuplicates = function(nums) {
    let unique = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in unique) {
            nums.splice(i, 1);
            i--;
        } else {
            unique.add(nums[i]);
        }
    }

    return nums.length;
};
