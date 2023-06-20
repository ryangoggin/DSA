# see js file for thought process

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        freq = {}

        for num in nums:
            if num not in freq:
                freq[num] = 1
            else:
                freq[num] += 1

        items = list(freq.items())

        for item in items:
            if item[1] > len(nums)/2:
                return item[0]
