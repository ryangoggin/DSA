# given array of strings,
# group the anagrams together, can return the answer in any order

# 0.) any anagram is equal once it is sorted alphabetically
# 1.) make a dictionary where each key is the anagram and the value is an array of all strings with that anagram
# 2.) iterate for every word in strs and convert the word to its 'anagram' (the word sorted alphabetically and put back together into a string)
# 3.) if the anagram is not a key in the dictionary, make it a new key with the value being the word in a list as the only element
# 4.) if the anagram is a key in the dictionary, append the word to the list that is the value
# 5.) after iterating, return the values of the dictionary as an array

class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagrams = {}
        for word in strs:
            anagram = ''.join(sorted(word))
            if anagram not in anagrams:
                anagrams[anagram] = [word]
            else:
                anagrams[anagram].append(word)
        return anagrams.values()
