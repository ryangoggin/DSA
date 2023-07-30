# see js file for thought process

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.split(" ")
        filtered = list(filter(lambda word: word != "", words))

        return len(filtered[-1])
