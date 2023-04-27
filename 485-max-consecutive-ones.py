# look at js file for thought process

class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max = 0
        counter = 0

        for i in nums:
            if i == 1:
                counter += 1
            else:
                counter = 0

            if counter > max:
                max = counter

        return max
