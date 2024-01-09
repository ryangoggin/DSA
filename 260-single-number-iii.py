# Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
# You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

# Example 1:
# Input: nums = [1,2,1,3,2,5]
# Output: [3,5]
# Explanation:  [5, 3] is also a valid answer.

# Example 2:
# Input: nums = [-1,0]
# Output: [-1,0]

# Example 3:
# Input: nums = [0,1]
# Output: [1,0]

###################################################################################################
# time - O(n) (O(nlogn) or whaterver .sort() time complexity is)
# space - O(1)

# 1.) sort nums to make adjacent comparison possible
# 2.) start num1 and num2 as a string "null" (DON'T DO None AS THIS FAILS IN EDGE CASES WHERE 0 IS A SINGLE NUMBER)
# 3.) set a skip boolean flag to start at False
# 4.) iterate until 2nd to last num
# 4a.) if skip is True (b/c a num matched its next) set skip to False and continue
# 4b.) if current num is equal to the next num, set skip to True and continue
# 4c.) otherwise the current num is num1 or num2, use if statements to figure out which to set
# 5.) check if num2 was set, if not then the last num is num2 and the for loop structure prevented it from setting
# 6.) return [num1, num2] or [num1, nums[-1]] depending on if num2 was set

class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        nums.sort()
        num1 = "null"
        num2 = "null"
        skip = False

        for i in range(len(nums) - 1):
            if skip:
                skip = False
                continue

            if nums[i] == nums[i+1]:
                skip = True
                continue
            else:
                if num1 == "null":
                    num1 = nums[i]
                    continue
                if num2 == "null":
                    num2 = nums[i]
                    break

        if num2 != "null":
            return [num1, num2]
        else:
            return [num1, nums[-1]]
