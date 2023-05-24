# see js file for thought process

class Solution:
    def slowerMinimumDifference(self, nums: List[int], k: int) -> int:
        if len(nums) < 2:
            return 0

        min_diff = float('inf')
        sorted_nums = sorted(nums)

        for i in range(0, len(nums) - k + 1):
            k_scores = sorted_nums[i: i+k]
            diff = max(k_scores) - min(k_scores)
            min_diff = min(min_diff, diff)

        return min_diff


# FASTER SOLUTION

class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        nums.sort()
        l, r = 0, k - 1
        res = float("inf")

        while r < len(nums):
            res = min(res, nums[r] - nums[l])
            l, r = l + 1, r + 1
        return res
