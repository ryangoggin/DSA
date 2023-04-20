# look at js for reasoning

class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 1:
            return True
        if n == 0:
            return False

        if n%2 == 0:
            if n == 2:
                return True
            else:
                return self.isPowerOfTwo(n/2)
        else:
            return False
