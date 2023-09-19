# see js file for thought processes

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        occurred = set()

        for num in nums:
            if num in occurred:
                return num
            else:
                occurred.add(num)
