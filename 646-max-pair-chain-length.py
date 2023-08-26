# see js file for thought process

class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        pairs.sort(key=lambda x: x[1])

        curr = float('-inf')
        res = 0

        for pair in pairs:
            if curr < pair[0]:
                curr = pair[1]
                res += 1

        return res
