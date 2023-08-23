# see js file for thought process

class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        first = float('-inf')
        second = float('-inf')
        res = 0

        for i in range(len(nums)):
            if nums[i] > first:
                second = first
                first = nums[i]
                res = i
            elif nums[i] > second:
                second = nums[i]

        if first >= 2*second:
            return res
        else:
            return -1
