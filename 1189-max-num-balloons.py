# see js file for thought process

class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        res = float('inf')

        balloon_freq = {
            "b": 0,
            "a": 0,
            "l": 0,
            "o": 0,
            "n": 0
        }

        for i in range(len(text)):
            if text[i] in balloon_freq:
                balloon_freq[text[i]] += 1


        entries = list(balloon_freq.items())

        for i in range(len(entries)):
            freq = None

            if entries[i][0] == "l" or entries[i][0] == "o":
                freq = floor(entries[i][1]/2)
            else:
                freq = entries[i][1]

            res = min(res, freq)

        return res
