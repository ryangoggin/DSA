# see js file for thought process

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()

        for i in range(len(strs[0])):
            if strs[0][i] != strs[len(strs) - 1][i]:
                return strs[0][0:i]

        return strs[0]
