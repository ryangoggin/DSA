/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example 1:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
*/

/*
time- O(n)
1.) iterate through 0 to the length of the array
2.) if an element is 0 do the following:
2a.) splice in a zero at the next index
2b.) pop off the last element to maintain array length
2c.) increment i to skip the added 0 to avoid making the entire array 0s
3.) return arr after iterating
*/

var duplicateZeros = function(arr) {
    let originalLen = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i+1, 0, 0);
            arr.pop();
            i++;
        }
    }

    return arr;
};
