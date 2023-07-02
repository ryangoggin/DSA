# see js file for thought process

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if k > len(nums):
            for i in range(k):
                num = nums.pop()
                nums.insert(0, num)

            return nums
        else:
            rotated = nums[len(nums) - k:]
            del nums[len(nums) - k:]
            new = rotated + nums
            nums[:] = new

            return nums
