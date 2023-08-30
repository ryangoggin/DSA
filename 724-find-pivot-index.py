# Given an array of integers nums, calculate the pivot index of this array.
# The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
# If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
# Return the leftmost pivot index. If no such index exists, return -1.

# Example 1:

# Input: nums = [1,7,3,6,5,6]
# Output: 3
# Explanation:
# The pivot index is 3.
# Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
# Right sum = nums[4] + nums[5] = 5 + 6 = 11

# Example 2:

# Input: nums = [1,2,3]
# Output: -1
# Explanation:
# There is no index that satisfies the conditions in the problem statement.

# Example 3:

# Input: nums = [2,1,-1]
# Output: 0
# Explanation:
# The pivot index is 0.
# Left sum = 0 (no elements to the left of index 0)
# Right sum = nums[1] + nums[2] = 1 + -1 = 0

###############################################################################3

# O(n) solution
# 1.) start a left and right sum, left being 0, right being sum of nums - the first index
# 2.) make an initial check and return 0 if they're equivalent
# 3.) loop through nums until the second to last element, add current element to leftSum and subtract next element from rightSum
# 4.) check if they're equivalent and return i+1 if they are (this is the pivot index, not i)
# 5.) if iteration compeletes, return -1

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        leftSum = 0
        rightSum = sum(nums) - nums[0]

        if leftSum == rightSum:
            return 0

        for i in range(len(nums)-1):
            leftSum += nums[i]
            rightSum -= nums[i+1]

            if leftSum == rightSum:
                return i+1

        return -1
