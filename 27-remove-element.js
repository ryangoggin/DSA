/*
given an array nums, and an element val remove all occurrences of that element from nums IN PLACE
return the length of nums after removing all occurrences of val
*/

/*
1.) iterate over nums
2.) if the current element is val, splice it out and decrement i (to keep the index accurate)
3.) return the length of nums after iteration
*/

var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length
};
