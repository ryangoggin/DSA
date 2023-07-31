# see js file for thought process

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sLetters = list(s)
        tLetters = list(t)

        if len(sLetters) != len(tLetters):
            return False

        sLetters.sort()
        tLetters.sort()

        for i in range(len(sLetters)):
            if sLetters[i] != tLetters[i]:
                return False

        return True

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq1 = {}
        freq2 = {}

        for i in range(len(s)):
            if s[i] not in freq1:
                freq1[s[i]] = 1
            else:
                freq1[s[i]] += 1

        for i in range(len(t)):
            if t[i] not in freq2:
                freq2[t[i]] = 1
            else:
                freq2[t[i]] += 1

        entries1 = list(freq1.items())
        entries2 = list(freq2.items())

        if len(entries1) != len(entries2):
            return False

        entries1.sort()
        entries2.sort()

        for i in range(len(entries1)):
            if entries1[i][0] != entries2[i][0] or entries1[i][1] != entries2[i][1]:
                return False

        return True
