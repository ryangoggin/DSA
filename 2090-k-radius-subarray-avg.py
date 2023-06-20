# see js file for thought process

class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        res = [-1] * len(nums)
        sum = 0

        for i in range(len(nums)):
            sum += nums[i]

            if i >= 2*k:
                avg = sum // (2*k + 1)
                res[i - k] = avg
                sum -= nums[i - 2*k]

        return res
