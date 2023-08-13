# Given an integer array nums, handle multiple queries of the following type:

# Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
# Implement the NumArray class:

# NumArray(int[] nums) Initializes the object with the integer array nums.
# int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

# Example 1:

# Input
# ["NumArray", "sumRange", "sumRange", "sumRange"]
# [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
# Output
# [null, 1, -1, -3]

# Explanation
# NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
# numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
# numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
# numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

#######################################################################

# correct implementation
# 1.)

class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.sum = []
        currSum = 0
        for num in nums:
            currSum += num
            self.sum.append(currSum)


    def sumRange(self, left: int, right: int) -> int:
        if left == 0:
            return self.sum[right]
        return self.sum[right] - self.sum[left-1]



# slow way that isn't what they want
# 1.) just make nums the property when initialized
# 2.) iterate from left to right indices and add to a sum

class NumArray:

    def __init__(self, nums: List[int]):
        self.array = nums


    def sumRange(self, left: int, right: int) -> int:
        res = 0
        for i in range(left, right+1):
            res += self.array[i]

        return res
