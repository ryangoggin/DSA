# see js file for thought process

class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
             return False

        if (math.log(n)/math.log(4)).is_integer():
            return True
        else:
            return False
