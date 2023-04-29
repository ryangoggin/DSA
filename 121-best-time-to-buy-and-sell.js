/*
given array prices where prices[i] is the price of a stock on the ith day
return the max profit you can achieve from prices
return 0 if no profit can be made
*/

/*
use 2 pointers (buy=0, sell=1) for sliding window:
1.) have a profit variable to track max profit
2.) iterate across prices with a while loop (while right pointer is less than length of prices arr)
3.) calculate current profit based on pointers indices
4.) if positive profit, compare against max profit and update if current is greater
5.) if negative profit, update buy pointer to the sell pointer
6.) increment sell pointer at the end of the loop
7.) return max profit outside the loop
*/

// time: O(n), n is number of days in prices
// space: O(n), only 4 variables used

var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;

    while (sell < prices.length) {
        let currProfit = prices[sell] - prices[buy];

        if (currProfit > 0) {
            if (currProfit > maxProfit) maxProfit = currProfit;
        } else {
            buy = sell;
        }

        sell++;
    }

    return maxProfit;
};
