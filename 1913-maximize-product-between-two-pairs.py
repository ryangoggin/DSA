# The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
# For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
# Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
# Return the maximum such product difference.

# Example 1:
# Input: nums = [5,6,2,7,4]
# Output: 34
# Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
# The product difference is (6 * 7) - (2 * 4) = 34.

# Example 2:
# Input: nums = [4,2,5,9,7,4,8]
# Output: 64
# Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
# The product difference is (9 * 8) - (2 * 4) = 64.

# Constraints:
# 4 <= nums.length <= 104
# 1 <= nums[i] <= 104

###########################################################################3
# time- O(n)
# space- O(1)
# 1.) in one pass get greatest, second greatest, least, and second least elements
# 2.) return diff of product of greatest and second greatest and product of least and second least

class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        largest = 1
        secondLargest = 1
        smallest = 10000
        secondSmallest = 10000

        for num in nums:
            if num < smallest:
                secondSmallest = smallest
                smallest = num
            elif num < secondSmallest:
                secondSmallest = num

            if num > largest:
                secondLargest = largest
                largest = num
            elif num > secondLargest:
                secondLargest = num

        return (largest * secondLargest) - (smallest * secondSmallest)


# time- O(nlogn) -> sorting nums, not optimal!
# space- O(1)
# 1.) sort nums
# 2.) return diff of product of 2 greatest w/ product of 2 least elements

class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        nums.sort()

        return (nums[-1] * nums[-2]) - (nums[0] * nums[1])
