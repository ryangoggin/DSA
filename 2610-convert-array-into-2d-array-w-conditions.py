# You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

# The 2D array should contain only the elements of the array nums.
# Each row in the 2D array contains distinct integers.
# The number of rows in the 2D array should be minimal.
# Return the resulting array. If there are multiple answers, return any of them.

# Note that the 2D array can have a different number of elements on each row.



# Example 1:
# Input: nums = [1,3,4,1,2,3,1]
# Output: [[1,3,4,2],[1,3],[1]]
# Explanation: We can create a 2D array that contains the following rows:
# - 1,3,4,2
# - 1,3
# - 1
# All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
# It can be shown that we cannot have less than 3 rows in a valid array.

# Example 2:
# Input: nums = [1,2,3,4]
# Output: [[4,3,2,1]]
# Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.
#######################################################################################################################

# time: O(n*m) where n is number of nums, m is number of distinct rows
# use a dict w/ keys as row number and the value as a set of the numbers already in that row
# use res to hold the distinct rows
# start with the first number in both res and rowSets so they're iterable/ have a length
# iterate over all nums:
# iterate over all the rows:
# if the current numbers isn't in any of the rows make a new row for it
# otherwise add to the first row where it isn't in that row's set

class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        res = [[nums[0]]]
        rowSets = {0: set([nums[0]])}

        for i in range(1, len(nums)):
            numRows = len(list(rowSets.keys()))

            for row in range(numRows):
                if nums[i] not in rowSets[row]:
                    res[row].append(nums[i])
                    rowSets[row].add(nums[i])
                    break

                if row == numRows - 1:
                    res.append([nums[i]])
                    rowSets[numRows] = set([nums[i]])

        return res
