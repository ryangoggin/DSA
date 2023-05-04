/*
given int array nums and int k
return k most frequent elements
*/

/*
1.) track frequencies with a POJO, create an empty array to hold the k frequent elements
2.) iterate over nums, add num as a key if not in the POJO, increment if it is
3.) using the entries of the POJO, sort in descending order
4.) iterate from 0 to k, push in that many elements from the sorted entries array into res
5.) return res
*/

var topKFrequent = function(nums, k) {
    let frequency = {};
    let res = [];

    for (let num of nums) {
        if (!frequency[num]) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }

    let sortedEntries = [...Object.entries(frequency)].sort((a, b) => b[1] - a[1]);
    // sorted entries looks like [["element", frequency], ["element", frequency], ...]


    for (let i = 0; i < k; i++) {
        res.push(sortedEntries[i][0]);
    }

    return res;
};
