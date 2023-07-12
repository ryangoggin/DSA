# see js file for thought process

class Solution:
    def firstBadVersion(self, n: int) -> int:
        hi = n
        lo = 1

        while hi > lo:
            mid = (hi + lo)//2

            if isBadVersion(mid):
                hi = mid
            else:
                lo = mid + 1

        return lo
