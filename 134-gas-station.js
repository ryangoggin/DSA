/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
*/

/*
faster way that tracks "totalTank" instead of doing every possible journey and pos to track where the journey is possible
*/

var canCompleteCircuit = function(gas, cost) {
    let curTank = 0;
    let totalTank = 0;
    let pos = 0;

    for (let i = 0; i < gas.length; i++) {
        curTank += gas[i] - cost[i];
        totalTank += gas[i] - cost[i];

        if (curTank < 0) {
            curTank = 0;
            pos = i + 1;
        }
    }
    return totalTank < 0 ? -1 : pos;
};

/*
slow brute force, time: O(n^2) where n is length of gas and cost
1.) make a helper to check if the loop can be completed w/ checks for invalid tanks at any point in the journey
1a.) return false whenever an invalid tank occurs
2.) iterate over length of gas or cost
3.) if the helper returns true at any start point, return that start point
4.) otherwise it is not possible, return -1
*/

var canCompleteCircuit = function(gas, cost) {
    function canComplete(start) {
        let tank = gas[start];

        for (let i = start+1; i < gas.length; i++) {
            tank -= cost[i-1];

            if (tank <= 0 && i !== start) {
                return false;
            }

            if (tank < 0) {
                return false;
            }

            tank += + gas[i];
        }

        for (let i = 0; i <= start; i++) {
            if (i === 0) {
                tank -= cost[cost.length - 1]

                if (tank <= 0 && i !== start) {
                    return false;
                }

                if (tank < 0) {
                    return false;
                }

                tank += gas[i];

            } else {
                tank -= cost[i-1];

                if (tank <= 0 && i !== start) {
                    return false;
                }

                if (tank < 0) {
                    return false;
                }

                tank += gas[i];
            }
        }
        return true;
    }

    for (let i = 0; i < gas.length; i++) {
        if (canComplete(i)) return i;
    }

    return -1;
};
