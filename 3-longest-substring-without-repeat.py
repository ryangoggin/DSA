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
class Solution:
    def fasterLengthOfLongestSubstring(self, s: str) -> int:
        curr_str = ""
        max_str = ""

        for char in s:
            if char in curr_str:
                if len(curr_str) > len(max_str):
                    max_str = curr_str
                curr_str = curr_str[curr_str.index(char) + 1:] + char
            else:
                curr_str += char

        return max(len(max_str), len(curr_str))
