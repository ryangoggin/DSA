# You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.
# Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

# Example 1:

# Input: nums = [1,1,4,2,3], x = 5
# Output: 2
# Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

# Example 2:

# Input: nums = [5,6,7,8,9], x = 4
# Output: -1

# Example 3:

# Input: nums = [3,2,20,1,1,3], x = 10
# Output: 5
# Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

###################################################################################################################
# sliding window
# 1.) the target is the difference between the sum of nums and x
# 2.) track the current sum, max length, start index and start all of them at 0
# 3.) track whether the operations to make x zero are possible with a boolean starting at false
# 4.) iterate through all possible end indices, add that indices num to the curr sum
# 5.) while the start and end indices aren't overlapping, increment start index and subtract the start index from curr sum
# 6.) if the curr sum is the target after the while loop completes, then those operations are possible
# 6a.) set possible to true, update max length to be the max between itself and end index - start index + 1
# 7.) if the operation are possible return the difference of nums' length and the max length as this is the min # of operations
# 8.) otherwise it isn't possible, return -1

class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        curr_sum = 0
        max_len = 0
        start = 0
        possible = False

        for end in range(len(nums)):
            curr_sum += nums[end]

            while start <= end and curr_sum > target:
                curr_sum -= nums[start]
                start += 1

            if curr_sum == target:
                possible = True
                max_len = max(max_len, end - start + 1)

        if possible:
            return len(nums) - max_len
        else:
            return -1
