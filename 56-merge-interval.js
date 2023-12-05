/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/*
time - O(n*logn) (sorting)
1.) sort the intervals by their first element for better merging
2.) set up a res array to store non-overlapping intervals
3.) iterate over all intervals
4.) if there's no interval in res or the last interval's last element is less than the current interval's first element --> push the current interval into res
5.) otherwise, update the last interval's last element to be the max of itself and the last element of the current interval
6.) return res after iteration
*/

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    let res = [];

    for (let interval of intervals) {
        let last = res.length - 1;

        if (res.length === 0 || (res[last][1] < interval[0])) {
            res.push(interval);
        } else {
            res[last][1] = Math.max(res[last][1], interval[1]);
        }
    }

    return res;
};
