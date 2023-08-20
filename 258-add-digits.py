# Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

# Example 1:

# Input: num = 38
# Output: 2
# Explanation: The process is
# 38 --> 3 + 8 --> 11
# 11 --> 1 + 1 --> 2
# Since 2 has only one digit, return it.

# Example 2:

# Input: num = 0
# Output: 0

#############################################################################################################
# recursive
# time: O(m*n) where n is length of num and m is number of calls to get a single digit
# 1.) base case: if num is less than 10 it is a single digit, return num
# 2.) convert num into a list of its digits by converting to a string then list
# 3.) iterate through this list and convert each element back to an int and add to a cumulative result
# 4.) recursively call the function on this result

class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10:
            return num

        nums = list(str(num))

        res = 0

        for i in range(len(nums)):
            res += int(nums[i])

        return self.addDigits(res)
