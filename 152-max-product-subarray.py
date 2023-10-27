# Given an integer array nums, find a
# subarray that has the largest product, and return the product.

# The test cases are generated so that the answer will fit in a 32-bit integer.

# Example 1:

# Input: nums = [2,3,-2,4]
# Output: 6
# Explanation: [2,3] has the largest product 6.

# Example 2:

# Input: nums = [-2,0,-1]
# Output: 0
# Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

#################################################################################

# DP, O(n) time, O(1) space
# 1.) track currMax AND currMin as double negatives can make the min subarray product the max
# 2.) store the max subarray product (between the former max and currMax) on each num in the nums array
# 3.) return this res after iteration

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        currMax = 1
        currMin = 1
        res = nums[0]

        for num in nums:
            vals = (num, num*currMax, num*currMin)
            currMax = max(vals)
            currMin = min(vals)
            res = max(res, currMax)

        return res
