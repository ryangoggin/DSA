# see js file for thought process

class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        res = []

        for num in nums:
            if num % 2 == 0:
                res = [num] + res
            else:
                res.append(num)

        return res
