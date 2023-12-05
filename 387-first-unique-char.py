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

# faster - technically O(nlogn) but n is number of characters in s, not the length of s (maxes at 26)
# get the first index of each character in s, if it's already in the dict set to a very high number like 10000000 to make a flag and put these at the end when sorting the entries
# sort the entries and return the first index (if there's only dupes it will be 1000000 and can detect to return -1 instead)

class Solution:
    def firstUniqChar(self, s: str) -> int:
        first_occurrence = {}

        for i in range(len(s)):
            if s[i] not in first_occurrence:
                first_occurrence[s[i]] = i
            else:
                first_occurrence[s[i]] = 10000000

        entries = list(first_occurrence.items())
        in_order = sorted(entries, key = lambda x: x[1])

        if in_order[0][1] == 10000000:
            return -1
        else:
            return in_order[0][1]

# time - O(n) where n is length of s
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
