/*
An array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

Example 1:

Input: arr = [0,1,0]
Output: 1

Example 2:

Input: arr = [0,2,1,0]
Output: 1

Example 3:

Input: arr = [0,10,5,2]
Output: 1
*/

/*
1.) binary search w/ 3 conditions for mid:
2a.) mid is the peak (before and after are both less): return mid
2b.) mid is left of peak (before is less, after is greater): lo is mid+1
2c.) mid is right of the peak (before is greater, after is less): hi is mid-1
*/

var peakIndexInMountainArray = function(arr) {
    let lo = 0;
    let hi = arr.length - 1;

    while (hi >= lo) {
        let mid = Math.ceil((hi+lo)/2);
        let before = mid - 1;
        let after = mid + 1;

        if (arr[mid] > arr[before] && arr[mid] > arr[after]) return mid;

        else if (arr[mid] > arr[before] && arr[mid] < arr[after]) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
};
