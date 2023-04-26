# given integer array nums
# return 3rd max
# if it doesn't exists, return maximum

# 0.) if len is 1, return nums[0] as the only nums is the max
# 1.) turn nums to a set and back to a list to get rid of dupes but allow indexing
# 1.5.) define sorted as nums.sort() to put ints in ascending order
# 2.) if len is 2, return sorted[-1] as that is the max
# 3.) otherwise len is 3 or greater, return sorted[-3]


class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        unique = list(set(nums))
        unique.sort()
        if len(unique) == 1:
            return nums[0]
        if len(unique) == 2:
            return unique[-1]
        else:
            return unique[-3]
