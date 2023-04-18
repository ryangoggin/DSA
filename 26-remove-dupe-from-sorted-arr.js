/*
given integer arr nums sorted in non-decreasing order
remove diplicates in-place
return # of unique elements
*/

/*
FASTER
1.) make a set from nums
2.) convert the set to an array to iterate over it
3.) reassign corresponding indices in nums to the index in the set
4.) return size of the set
*/

// faster O(n), n is unique nums in nums
var removeDuplicates = function(nums) {
    let unique = new Set(nums);
    let uniqueArr = Array.from(unique);

    for (let i = 0; i < uniqueArr.length; i++) {
        nums[i] = uniqueArr[i]
    }

    return unique.size;
};

/*
SLOWER
1.) make an empty set
2.) iterate over nums checking if current num in the set
3.) if it is, splice it out of nums
4.) if it is not, add it to the set and continue
*/

// // slower O(n+m), n is nums in nums, m is num of dupes in nums
// var removeDuplicates = function(nums) {
//     let unique = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in unique) {
//             nums.splice(i, 1);
//             i--;
//         } else {
//             unique.add(nums[i]);
//         }
//     }

//     return nums.length;
// };
