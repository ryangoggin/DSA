# Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
# The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

# Example 1:
# Input: s = "011101"
# Output: 5
# Explanation:
# All possible ways of splitting s into two non-empty substrings are:
# left = "0" and right = "11101", score = 1 + 4 = 5
# left = "01" and right = "1101", score = 1 + 3 = 4
# left = "011" and right = "101", score = 1 + 2 = 3
# left = "0111" and right = "01", score = 1 + 1 = 2
# left = "01110" and right = "1", score = 2 + 1 = 3

# Example 2:
# Input: s = "00111"
# Output: 5
# Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

# Example 3:
# Input: s = "1111"
# Output: 3

#############################################################################################

# time: O(n)
# space: O(1)

# 1.) start leftZeros at 1 or 0 depending on first character
# 2.) count ones from index 1 on and make that value rightOnes
# 3.) start res at the sum of leftZeros and rightOnes
# 4.) increment from index 1 to index before the last one
# 4a.) if the current element is "0" increment leftZeros, otherwise it is a "1" and you decrement rightOnes
# 4b.) set res to the max of itself and the new leftZeros+rightOnes
# 5.) return res

class Solution:
    def maxScore(self, s: str) -> int:
        leftZeros = None

        if s[0] == "0":
            leftZeros = 1
        else:
            leftZeros = 0

        rightOnes = 0

        for i in range(1, len(s)):
            if s[i] == "1":
                rightOnes += 1

        res = leftZeros + rightOnes

        for i in range(1, len(s)-1):
            if s[i] == "0":
                leftZeros += 1
            else:
                rightOnes -= 1

            res = max((leftZeros + rightOnes), res)

        return res
