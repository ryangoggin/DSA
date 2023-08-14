/*
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1

Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
*/

/*
time: O(n log n) where n is length of timePoints b/c of the sort

1.) make helper that converts a timePoint to minutes
1a.) split at the :, 0 index is h, 1 index is m
2.) parseInt both when adding to res, return res
3.) iterate over the timePoints, update each index to its converted value
4.) sort the converted timePoints in ascending order
5.) set the minDiff to the diff between first and last values (1440 minutes - their difference b/c the wrap around)
6.) iterate to the second to last index of the sorted and converted timePoints, update the minDiff w/ the calculated current diff at each index
7.) return the minDiff
*/


var findMinDifference = function(timePoints) {
    // helper to convert a time point to its minutes value
    function convert(timePoint) {
        let res = 0;
        let [h, m] = timePoint.split(":");

        res += 60 * parseInt(h);
        res += parseInt(m);

        return res
    }

    // convert timePoints array to their minute values
    for (let i = 0; i < timePoints.length; i++) {
        timePoints[i] = convert(timePoints[i]);
    }

    // sort the times in ascending order
    timePoints.sort((a, b) => a-b);

    // set initial minMin to the diff between last index and first index
    let minDiff = 1440 - (timePoints[timePoints.length - 1] - timePoints[0]);

    // iterate over converted and sorted timepoints and update minMin
    for (let i = 0; i < timePoints.length - 1; i++) {
        let currDiff = timePoints[i+1] - timePoints[i];
        minDiff = Math.min(currDiff, minDiff);
    }

    return minDiff;
};
