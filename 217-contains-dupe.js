/*
given array nums, return true if any dupes, return false if no dupes
*/

/*
faster using set size instead of double convert
*/
var containsDuplicate = function(nums) {
    let numsSet = new Set(nums);

    return nums.length !== numsSet.size;
};

/*
1.) convert array to a set
2.) convert back to array, compare lengths
3.) compare lengths of the arrays, true if same, false if not
*/

// var containsDuplicate = function(nums) {
//     let numsSet = new Set(nums);
//     let numsSetArr = Array.from(numsSet);

//     if (nums.length === numsSetArr.length) {
//         return false;
//     } else {
//         return true;
//     }
// };
