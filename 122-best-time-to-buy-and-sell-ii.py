# see JS for thought process

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0

        for i in range(1, len(prices)):
            curr_price = prices[i]
            prev_price = prices[i - 1]
            potential = curr_price - prev_price

            if potential > 0:
                profit += potential

        return profit
