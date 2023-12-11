# Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

# Example 1:
# Input: arr = [1,2,2,6,6,6,6,7,10]
# Output: 6

# Example 2:
# Input: arr = [1,1]
# Output: 1

# time O(n)
# space O(n)

# 1.) use a dictionary to store letter frequencies
# 2.) once one has a frequency greater than 25% of the length of arr, return that number

class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        n = len(arr)
        freq = {}

        for i in range(n):
            num = arr[i]
            if num not in freq:
                freq[num] = 1
                if freq[num]/n > 0.25:
                    return num
            else:
                freq[num] += 1
                if freq[num]/n > 0.25:
                    return num
