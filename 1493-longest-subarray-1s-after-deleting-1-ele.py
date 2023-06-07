# similar to 1004, k is always 1 though... solution needs - 1 for some reason too...

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        k = 1
        start = 0
        end = 0

        while end < len(nums):
            if nums[end] == 0:
                k -= 1

            if k < 0:
                if nums[start] == 0:
                    k += 1
                start += 1

            end += 1

        return end - start - 1
