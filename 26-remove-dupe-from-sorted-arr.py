## see JS for thought process on solution

class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        unique_nums = set(nums)
        unique_list = list(unique_nums)
        unique_list.sort()

        for i in range(len(unique_list)):
            nums[i] = unique_list[i]

        return len(unique_nums)
