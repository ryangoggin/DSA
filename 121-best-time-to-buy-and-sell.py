# look at JS file for reasoning and explanation

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        buy = 0
        sell = 1
        max_profit = 0

        while sell < len(prices):
            curr_profit = prices[sell] - prices[buy]
            if curr_profit > 0:
                max_profit = max(max_profit, curr_profit)
            else:
                buy = sell
            sell += 1

        return max_profit

#  faster for loop implementation?

class Solution(object):
    def maxProfit(self, prices):
        max_profit = 0
        buy = prices[0]

        # [7,1,5,3,6,4]
        for price in prices:
            if price < buy:
                buy = price
            if price - buy > max_profit:
                max_profit = price- buy

        return max_profit
