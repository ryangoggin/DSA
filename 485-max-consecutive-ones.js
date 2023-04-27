/*
given binary array nums return max number of consecutive 1s
*/

/*
1.) make a counter and a max variable
2.) iterate over nums
3.) if current index is a 1, increment counter
4.) if it is a 0, reset counter to 0
5.) compare counter to max each index, set new max once counter is greater than max
6.) return max
*/

var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter > max) max = counter;
    }

    return max;
};
