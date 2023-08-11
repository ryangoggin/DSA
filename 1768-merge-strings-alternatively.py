# You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

# Return the merged string.



# Example 1:

# Input: word1 = "abc", word2 = "pqr"
# Output: "apbqcr"
# Explanation: The merged string will be merged as so:
# word1:  a   b   c
# word2:    p   q   r
# merged: a p b q c r
# Example 2:

# Input: word1 = "ab", word2 = "pqrs"
# Output: "apbqrs"
# Explanation: Notice that as word2 is longer, "rs" is appended to the end.
# word1:  a   b
# word2:    p   q   r   s
# merged: a p b q   r   s
# Example 3:

# Input: word1 = "abcd", word2 = "pq"
# Output: "apbqcd"
# Explanation: Notice that as word1 is longer, "cd" is appended to the end.
# word1:  a   b   c   d
# word2:    p   q
# merged: a p b q c   d

#####################################################################

# 1.) convert both strings into lists
# 2.) make a res variable an empty string
# 3.) iterate over the first letters of both lists until one is empty
# 4.) add the first letter of first list, then first letter of second list and delete both first indices
# 5.) after iteration, add the rest of whichever list has leftover letters
# 6.) return the merged res

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        list1 = list(word1)
        list2 = list(word2)

        res = ""

        while len(list1) > 0 and len(list2) > 0:
            res += list1[0]
            res += list2[0]

            del list1[0]
            del list2[0]

        if len(list1) > 0:
            res += "".join(list1)
        elif len(list2) > 0:
            res += "".join(list2)

        return res
