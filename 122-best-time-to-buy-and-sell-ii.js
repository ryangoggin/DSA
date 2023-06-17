/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
*/

/*
1.) set profit to 0
2.) iterate over prices starting at day 2 and check profit from current day and previous day
3.) increment profit by the profit between current day and previous day if there is a positive sell
4.) return profit after the loop
*/

var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currPrice = prices[i];
        let prevPrice = prices[i - 1];
        let potential = currPrice - prevPrice;

        if (potential > 0) profit += potential;
    }

    return profit;
};
