# Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

# Return the sorted string. If there are multiple answers, return any of them.

# Example 1:

# Input: s = "tree"
# Output: "eert"
# Explanation: 'e' appears twice while 'r' and 't' both appear once.
# So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

# Example 2:

# Input: s = "cccaaa"
# Output: "aaaccc"
# Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
# Note that "cacaca" is incorrect, as the same characters must be together.

# Example 3:

# Input: s = "Aabb"
# Output: "bbAa"
# Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
# Note that 'A' and 'a' are treated as two different characters.

############################################################################

# 1.) create an empty res string and empty freq dict
# 2.) iterate over chars in string, update their freq in the freq dict
# 3.) after, convert the dict into a list of its items
# 4.) sort this list by the 1 index and reverse it so it is in descending order
# 5.) iterate over the sorted entries and convert each to a list for manipulation of the frequency
# 6.) while the entry's freq is over 1, concatenate the letter to the res string and decrement its freq
# 7.) after iteration completes, return res

class Solution:
    def frequencySort(self, s: str) -> str:
        res = ""

        freq = {}

        for char in s:
            if char not in freq:
                freq[char] = 1
            else:
                freq[char] += 1

        entries = list(freq.items())

        entries.sort(key= lambda x: x[1], reverse=True)

        for entry in entries:
            entry = list(entry)
            while entry[1] > 0:
                res += entry[0]
                entry[1] -= 1

        return res
