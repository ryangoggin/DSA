# look at js file for thought process

class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        res = 0
        counter = 0
        start = 0
        vowels = set(['a', 'e', 'i', 'o', 'u'])

        for end in range(len(s)):
            if s[end] in vowels:
                counter += 1

            if end - start + 1 > k:
                if s[start] in vowels:
                    counter -= 1
                start += 1

            res = max(res, counter)
            if res == k:
                return res

        return res
