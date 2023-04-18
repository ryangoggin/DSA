
/*
Weird twoSum that is almost O(n):;
JUST US A HASH MAP THO

var twoSum = function(nums, target) {
    let numsSet = new Set(nums);
    let numsObj = Object.assign(nums);

    let invNumsObj = {};
    Object.keys(numsObj).forEach(key => {
        invNumsObj[numsObj[key]] = key;
    });

    let freqCount = nums.reduce((nums, num) => {
        if (nums[num]) {
            nums[num]++;
        } else {
            nums[num] = 1;
        }
        return nums;
    }, {});

    for (let i = 0; i<nums.length; i++) {
        let num = nums[i];
        let otherNum = target - num;
        let numIdx = invNumsObj[num];
        let otherNumIdx = invNumsObj[otherNum];
        if (num === otherNum && freqCount[num] > 1) {
            numIdx = nums.indexOf(num);
            nums.splice(numIdx, 1, '-');
            otherNumIdx = nums.indexOf(num);
            return [numIdx, otherNumIdx]
        }
        if (numsSet.has(otherNum) && numIdx !== otherNumIdx) {
            return [numIdx, otherNumIdx];
        }
    }
};

much simpler with hash map:
var twoSum = function(nums, target) {
    const map = {};
    for (let i =0; i<nums.length; i++){
        if (map[nums[i]] !== undefined){
            return [map[nums[i]], i];
        }
        let rem = target-nums[i];
        map[rem] = i;
    }
    return [];
};
*/
