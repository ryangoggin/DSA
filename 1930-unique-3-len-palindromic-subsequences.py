# Given a string s, return the number of unique palindromes of length three that are a subsequence of s.
# Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.
# A palindrome is a string that reads the same forwards and backwards.
# A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
# For example, "ace" is a subsequence of "abcde".

# Example 1:

# Input: s = "aabca"
# Output: 3
# Explanation: The 3 palindromic subsequences of length 3 are:
# - "aba" (subsequence of "aabca")
# - "aaa" (subsequence of "aabca")
# - "aca" (subsequence of "aabca")

# Example 2:

# Input: s = "adc"
# Output: 0
# Explanation: There are no palindromic subsequences of length 3 in "adc".

# Example 3:

# Input: s = "bbcbaba"
# Output: 4
# Explanation: The 4 palindromic subsequences of length 3 are:
# - "bbb" (subsequence of "bbcbaba")
# - "bcb" (subsequence of "bbcbaba")
# - "bab" (subsequence of "bbcbaba")
# - "aba" (subsequence of "bbcbaba")

################################################################

# brute force checking every possible subsequence, too slow to pass. time is O(n^3) lol

class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        if len(s) < 3:
            return 0

        if len(s) == 3:
            if s[0] == s[2]:
                return 1
            else:
                return 0

        unique = set()
        res = 0

        for first in range(len(s) - 1):
            second = first + 1
            third = second + 1

            while second <= len(s) - 2:

                while third <= len(s) - 1:
                    substring = s[first] + s[second] + s[third]

                    if s[first] == s[third] and substring not in unique:
                        res += 1
                        unique.add(substring)

                    third += 1

                second += 1
                third = second + 1

        return res
