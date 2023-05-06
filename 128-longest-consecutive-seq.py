# look at js file for logic

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        curr_len = 1
        max_len = 1

        unqiue = list(set(nums))
        nums = sorted(unqiue)

        for i in range(len(nums) - 1):
            if nums[i] == (nums[i+1] - 1):
                curr_len += 1
                max_len = max(curr_len, max_len)
            else:
                curr_len = 1

        return max_len
