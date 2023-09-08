class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        res = []
        for i in range(len(nums)):
            other_num = target - nums[i]
            try:
                if nums.index(other_num) != i and other_num in nums:
                    res.append(i)
                    res.append(nums.index(other_num))
                    return res
            except:
                continue
        return None
