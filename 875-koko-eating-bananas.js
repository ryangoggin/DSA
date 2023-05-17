/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.



Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/

/*
1.) have a min speed (1) and max speed (the max of piles)
2.) set optimal to start as max
3.) make a helper function to calculate the time to eat all the bananas
3b.) helper uses Math.ceil on pile/speed because koko doesn't go to the next pile until the next hour even if she finishes early
4.) while min and max don't overlap, calculate the mid between them
5.) plug mid into time and compare to h
6.) if the time is less than h mid is the new optimal and max is now 1 less than mid
7.) otherwise min is mid + 1
8.) return optimal after the loop finishes
*/

var minEatingSpeed = function(piles, h) {
    // edge case
    if (h === piles.length) return Math.max(...piles);

    // time to eat all piles helper fxn
    const time = (speed) => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0);

    let min = 1;
    let max = Math.max(...piles);
    let optimal = max;

    while (min <= max) {
        let mid = Math.floor((min+max)/2);
        let currTime = time(mid);

        if (currTime <= h) {
            optimal = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return optimal;
};
