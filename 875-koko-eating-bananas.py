# look at js file for thought process

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # helper fxn, the + () rounds up if there's a remainder
        def time(speed):
            sum = 0
            for i in range(len(piles)):
                sum += piles[i] // speed + (piles[i] % speed > 0)
            return sum

        min_rate = 1
        max_rate = max(piles)
        optimal = max_rate

        while min_rate <= max_rate:
            mid = (min_rate + max_rate) // 2
            curr_time = time(mid)

            if curr_time <= h:
                optimal = mid
                max_rate = mid - 1
            else:
                min_rate = mid + 1

        return optimal
