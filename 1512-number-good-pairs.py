# Given an array of integers nums, return the number of good pairs.
# A pair (i, j) is called good if nums[i] == nums[j] and i < j.

# Example 1:

# Input: nums = [1,2,3,1,1,3]
# Output: 4
# Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

# Example 2:

# Input: nums = [1,1,1,1]
# Output: 6
# Explanation: Each pair in the array are good.

# Example 3:

# Input: nums = [1,2,3]
# Output: 0

################################################################

# O(n) time - n is length of nums
# 1.) use a freq dict and track the pairs in the res variable
# 2.) iterate over nums, if the number isn't in the freq dict then add it as a key and set the value to 1
# 3.) otherwise add the current frequency to res as this is how many new pairs can be made, then increment the key in the dict by 1
# 4.) after iterating, reutrn res

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        freq = {}
        res = 0

        for num in nums:
            if num not in freq:
                freq[num] = 1
            else:
                res += freq[num]
                freq[num] += 1

        return res
