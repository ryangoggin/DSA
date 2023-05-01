# look at js file for reasoning
# iterating backwards in python can be done by using -1 in 3rd arg of range

class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res = list(nums)
        forward = 1
        backward = 1

        for i in range(len(nums)-1, -1, -1):
            res[i] = backward
            backward *= nums[i]

        for j in range(len(nums)):
            res[j] *= forward
            forward *= nums[j]

        return res
