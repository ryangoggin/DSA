# see js file for thought process

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        first = 0
        last = 0
        curr_sum = 0
        min_len = 0

        while last < len(nums):
            curr_sum += nums[last]

            while curr_sum >= target:
                curr_len = last - first + 1
                if min_len == 0:
                    min_len = curr_len
                else:
                    min_len = min(curr_len, min_len)
                curr_sum -= nums[first]
                first += 1

            last += 1

        return min_len
