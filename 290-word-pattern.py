# given a pattern and string s, find if s follows pattern

# time complexity: O(n), space complexity: O(n)

# 1.) use a dictionary to make kv pairs for pattern and words
# 2.) make s and pattern iterable (.split() on s, list() on pattern)
# 3.) if length of pattern and words are not the same, return False
# 4.) iterate over the indices of words (could do pattern assuming they're the same length at this point)
# 5.) check if the current letter in pattern is a key in the dict
# 6.) if it is, check if the current word matches the value assigned to that key in the dict
# 7.) return False if they are not
# 8.) otherwise add the current pattern letter as a key in the dict for the current word as the value
# 9.) after the loop is done, make unique versions of the values in the dict and the letters in the pattern with sets
# 10.) if both lengths of these unique lists are not the same, return False
# 11.) return True if they are the same length

class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        pattern_match = dict()
        words = s.split()
        letters = list(pattern)

        if len(pattern) != len(words):
            return False

        for i in range(len(words)):
            if pattern[i] in pattern_match.keys():
                if pattern_match[pattern[i]] != words[i]:
                    return False
            else:
                pattern_match[pattern[i]] = words[i]

        unique_words = list(set(pattern_match.values()))
        unique_pattern = list(set(letters))

        if len(unique_words) != len(unique_pattern):
            return False
        else:
            return True
