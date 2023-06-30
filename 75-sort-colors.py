# see js file for thought process
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        counter = 0

        for i in range(len(nums) - 1):
            if nums[i] > nums[i+1]:
                tmp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = tmp
                counter += 1

        if counter == 0:
            return nums

        self.sortColors(nums)
