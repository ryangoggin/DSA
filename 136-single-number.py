# look at js file for thought process

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        nums.sort()
        print(nums)

        for i in range(0, len(nums), 2):
            if i == len(nums) - 1:
                return nums[i]
            if nums[i] != nums[i+1]:
                return nums[i]
