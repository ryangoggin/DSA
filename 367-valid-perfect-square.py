# return True if valid perfect square, False if not

# still don't fully understand the math of this... look into more maybe

class Solution(object):
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        num1 = 0
        num2 = 1

        while num1 < num:
            num1 += num2
            num2 += 2

        return num1 == num
