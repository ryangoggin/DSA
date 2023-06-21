# see js file for thought process

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        i = 0
        max_jump = 0

        while i < len(nums):
            max_jump = max(max_jump, i + nums[i])

            if max_jump >= len(nums) - 1:
                return True

            if max_jump <= i and nums[i] == 0:
                return False

            i += 1

        return False
