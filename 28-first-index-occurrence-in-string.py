# iterate over haystack
# at each letter check if the slice of needle length matches needle, if it does return that index
# return -1 if it makes it through the whole loop

class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        for i in range(len(haystack)):
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1
