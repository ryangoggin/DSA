/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/*
dp - fibonacci
1.) make an array where each index, i, is the ways to climb i stairs
2.) make an array of length n + 1
3.) set 0, 1, 2 indices to 0, 1, 2 respectively becuase that's how many ways to climb each of those
4.) going from there, it is a fibonacci, so at index i, it is equal to the i-1th index element + i-2th index element
5.) return the nth (last) element of this array
*/

var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};
