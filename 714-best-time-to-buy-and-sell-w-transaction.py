# see js file for thought process

class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        prof = 0
        hold = float('-inf')

        for price in prices:
            temp = hold

            hold = max(hold, prof - price)
            prof = max(prof, temp + price - fee)

        return prof
