#  see JS for reasoning for this, this is SLOW in python
class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        unique = set(nums)
        freq = dict()
        res = ["", ""]

        for i in range(1, len(nums)+1):
            if nums[i-1] in freq.keys():
                res[0] = nums[i-1]
                freq[nums[i-1]] += 1
            else:
                freq[nums[i-1]] = 1

            if i not in unique:
                res[1] = i

        return res

# faster python solution O(1) time
class Solution(object):
    def findErrorNums(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        dup = sum(nums) - sum(set(nums))

        s = len(nums)*(len(nums)+1)/2

        return [dup,s-sum(set(nums))]
