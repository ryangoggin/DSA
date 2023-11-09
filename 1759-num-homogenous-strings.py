# Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 109 + 7.
# A string is homogenous if all the characters of the string are the same.
# A substring is a contiguous sequence of characters within a string.

# Example 1:

# Input: s = "abbcccaa"
# Output: 13
# Explanation: The homogenous substrings are listed as below:
# "a"   appears 3 times.
# "aa"  appears 1 time.
# "b"   appears 2 times.
# "bb"  appears 1 time.
# "c"   appears 3 times.
# "cc"  appears 2 times.
# "ccc" appears 1 time.
# 3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.

# Example 2:

# Input: s = "xy"
# Output: 2
# Explanation: The homogenous substrings are "x" and "y".

# Example 3:

# Input: s = "zzzzz"
# Output: 15

#####################################################################3

# time - O(n), n is length of s
# space - O(1)

# do 2 pointer solution w/ substring algorithm where each time substring length increments, the number of homogenous substrings increases by the length of the substring

class Solution:
    def countHomogenous(self, s: str) -> int:
        left = 0
        res = 0

        for right in range(len(s)):
            if s[left] == s[right]:
                # increment by current length of substring
                res += right - left + 1
            else:
                # only increment by 1, reset left to current right
                res += 1
                left = right

        # number gets really big, return res modulo of 10^9 + 7
        return res % (10**9 + 7)
