# see thought process in js file

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        frequency = {}

        for num in nums:
            if num not in frequency:
                frequency[num] = 1
            else:
                frequency[num] += 1

        entries = frequency.items()

        for entry in entries:
            if entry[1] == 1:
                return entry[0]

    def otherSol(self, nums):
        '''
        count method exists, use that
        '''
        for num in nums:
            if nums.count(num) == 1:
                return num
