/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:

Input: arr = [1,2]
Output: false

Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/

/*
1.) use a POJO to story frequencies
2.) take a set of the values of the POJO
3.) if the set has the same size as the length of the values array then return true, false otherwsie
*/

var uniqueOccurrences = function(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        if (!freq[arr[i]]) {
            freq[arr[i]] = 1;
        } else {
            freq[arr[i]]++;
        }
    }

    let freqs = Object.values(freq);
    let uniqueFreqs = new Set(freqs);

    if (freqs.length === uniqueFreqs.size) {
        return true;
    } else {
        return false;
    }
};
