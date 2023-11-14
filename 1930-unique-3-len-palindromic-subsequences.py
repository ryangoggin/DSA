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

# faster O(n) where n is the number of characters between each first and last occurrence of any of the letters
# 1.) populate a first occurrence and last occurrence list with each of the 26 letters first and last occurrences in the s
# 2.) initialize res to be 0
# 3.) iterate over all 26 letters (indices 0-25 of first and last occurrence lists)
# 4.) if the character isn't present (first or last occurrence are inf or -inf)
# 5.) create a unique set for that character
# 6.) iterate the indices between first and last occurrences, add each character to the unique set to remove any dupes
# 7.) increment the res by the length of the unique set between the first and last occurrences of that character
# 8.) return res after iterating

class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        first_occurrence = [float('inf')] * 26
        last_occurrence = [float('-inf')] * 26

        for i in range(len(s)):
            idx = ord(s[i]) - ord('a')
            first_occurrence[idx] = min(first_occurrence[idx], i)
            last_occurrence[idx] = max(last_occurrence[idx], i)

        res = 0

        for i in range(26):
            if first_occurrence[i] == float('inf') or last_occurrence[i] == float('-inf'):
                continue

            unique = set()

            for j in range(first_occurrence[i] + 1, last_occurrence[i]):
                unique.add(s[j])

            res += len(unique)

        return res

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
