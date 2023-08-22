# Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

# For example:

# A -> 1
# B -> 2
# C -> 3
# ...
# Z -> 26
# AA -> 27
# AB -> 28
# ...


# Example 1:

# Input: columnNumber = 1
# Output: "A"

# Example 2:

# Input: columnNumber = 28
# Output: "AB"

# Example 3:

# Input: columnNumber = 701
# Output: "ZY"

############################################################
# 1.) while the columnNumber isn't 0, divmod itself-1 by 26 to get the quotient and remainder
# 2.) append the remainder converted to unicode character (must add 65 to get the correct capital letter)
# 3.) once done iterating, join the reversed list and that is the column

class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []
        while columnNumber:
            columnNumber, remainder = divmod(columnNumber - 1, 26)
            result.append(chr(65 + remainder))
        return ''.join(reversed(result))
