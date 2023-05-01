/*
given int array nums, return array where res[i] is the product of elements in nums excep itself
*/

/*
1.) this can be done with 2 loops (keeps time complexity O(n)), one iterating forward across nums and the other iterating backwards across nums
2.) will also need two variables to hold what is being multiplied in each loop (one for each loop) (start both at 1)
3.) in the backward loop, fill result array with the mult variable at each corresponding index
4.) in the forward loop, multiply corresponding indices of result by forward loops mult variable
5.) in both loops, the mult variable is updated on each iteration by multiplying by that index of nums
*/

var productExceptSelf = function(nums) {
    const res = [];
    let leftMult = 1;
    let rightMult = 1;
    for (let i=nums.length - 1; i >= 0; i--) {
        res[i] = rightMult;
        rightMult *= nums[i];
    }
    for (let j=0; j < nums.length; j++) {
        res[j] *= leftMult;
        leftMult *= nums[j];
    }
    return res;
};
