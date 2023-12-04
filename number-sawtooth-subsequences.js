/*
A sawtooth sequence is a sequence of numbers that alternate between increasing and decreasing. In other words, each element is either strictly greater than its neighbouring elements or strictly less than its neighbouring elements.
Given an array of integers arr, your task is to count the number of contiguous subarrays that represent a sawtooth sequence of at least two elements.

Examples:

For arr = [9, 8, 7, 6, 5], the output should be solution(arr) = 4.
Since all the elements are arranged in decreasing order, it won't be possible to form any sawtooth subarrays of length 3 or more. There are 4 possible subarrays containing two elements, so the answer is 4.

For arr = [10, 10, 10], the output should be solution(arr) = 0.
Since all of the elements are equal, none of subarrays can be sawtooth, so the answer is 0.

For arr = [1, 2, 1, 2, 1], the output should be solution(arr) = 10.
All contiguous subarrays containing at least two elements satisfy the condition of problem. There are 10 possible contiguous subarrays containing at least two elements, so the answer is 10.

Input/Output:
[execution time limit] 4 seconds (js)
[memory limit] 1 GB
[input] array.integer arr
An array of integers.
Guaranteed constraints:
2 ≤ arr.length ≤ 105,
-109 ≤ arr[i] ≤ 109.
[output] integer64

Return the number of sawtooth subarrays.
*/

/*
DP:
time: O(n)
space: O(1)
*/

function solution(arr) {
    if (arr.length < 2) return 0;

    let res = 0;
    let streak = 0;
    let prevIncreasing = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            prevIncreasing = null;
            streak = 0;
        } else {
            currIncreasing = arr[i] > arr[i-1];

            if (currIncreasing !== prevIncreasing) {
                streak++;
                prevIncreasing = currIncreasing;
            } else {
                streak = 1;
            }

            res += streak;
        }
    }

    return res;
}

/*
can also O(n^3) brute force by making a sawtooth check helper and running it on EVERY subsequence with nested for loops
*/
