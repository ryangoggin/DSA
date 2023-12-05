# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

# Example 1:
# Input: s = "leetcode"
# Output: 0

# Example 2:
# Input: s = "loveleetcode"
# Output: 2

# Example 3:
# Input: s = "aabb"
# Output: -1
######################################################
# 2 pass using dictionary for frequency, return index of first char w/ 1 frequency

class Solution:
    def firstUniqChar(self, s: str) -> int:
        freq = {}

        for i in range(len(s)):
            if s[i] not in freq:
                freq[s[i]] = 1
            else:
                freq[s[i]] += 1

        for i in range(len(s)):
            if freq[s[i]] == 1:
                return i

        return -1
