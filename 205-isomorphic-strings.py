# Given two strings s and t, determine if they are isomorphic.
# Two strings s and t are isomorphic if the characters in s can be replaced to get t.
# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

# Example 1:

# Input: s = "egg", t = "add"
# Output: true

# Example 2:

# Input: s = "foo", t = "bar"
# Output: false

# Example 3:

# Input: s = "paper", t = "title"
# Output: true

###############################
# time: O(n) where n is string length
# space: O(n) where n is string length

# 1.) if the strings aren't the same length, return false
# 2.) convert each string to a list and make a dict to track the translation
# 3.) iterate across each index of both lists
# 3a.) if the current element in s isn't a key in the dict, make it a key with the corresponding element of t as the value
# 3b.) if the element of s is a key, check to make sure that it's value is the corresponding value of t
# 3c.) otherwise, return false
# 4.) still need to check for duplicate t values for different s keys
# 5.) convert the dict to its items as a list, iterate across it
# 6.) make a set of unique t values
# 7.) each t value gets added to the unique set if it isn't already present
# 8.) if the t value is in the unique set already, strings aren't isomorphic --> return false
# 9.) if the function gets to this point then the strings pass all isomorphic criteria --> return true

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_list = list(s)
        t_list = list(t)
        unique = set()
        translation_dict = {}

        for i in range(len(s_list)):
            if s_list[i] not in translation_dict:
                translation_dict[s_list[i]] = t_list[i]
            elif translation_dict[s_list[i]] == t_list[i]:
                continue
            else:
                return False

        entries = list(translation_dict.items())

        for entry in entries:
            if entry[1] not in unique:
                unique.add(entry[1])
            else:
                return False

        return True
