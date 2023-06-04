# see js file for thought process

class Solution:
    def guessNumber(self, n: int) -> int:
        lo = 1
        hi = n

        while hi >= lo:
            mid = (hi + lo)//2
            check = guess(mid)

            if check == -1:
                hi = mid - 1
            elif check == 1:
                lo = mid + 1
            else:
                return mid
