# see js file for reasoning

# REALLY SLOW, DON'T USE, O(nlogn)
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        currLetter = 0
        currLen = 0
        maxLen = 0
        uniqueLetters = set()

        while (currLetter < len(s)):
            if s[currLetter] not in uniqueLetters:
                currLen += 1
                uniqueLetters.add(s[currLetter])
                currLetter += 1
                maxLen = max(currLen, maxLen)
            else:
                start += 1
                currLetter = start
                uniqueLetters = set()
                currLen = 0

        return maxLen

#  better O(n)
