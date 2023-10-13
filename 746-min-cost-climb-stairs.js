/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/

/*
time and space - O(n), bottom down DP
1.) create an array of zeros 1 longer than the given cost array
2.) iterate through the dp array starting at the 2nd step
3.) each index of dp is the min cost between the previous step (i-1) and 2 steps ago (i-2)
4.) min cost for the whole flight of stairs will be the nth index of dp after this loop finishes
*/

var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(0);

    for (let i = 2; i < n+1; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
    }

    return dp[n];
};
