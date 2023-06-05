# see js file for thought process

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        map = {}

        for num in nums2:
            while len(stack) > 0 and stack[-1] < num:
                map[stack[-1]] = num
                del stack[-1]
            stack.append(num)

        res = []

        for num in nums1:
            if num in map:
                res.append(map[num])
            else:
                res.append(-1)

        return res
