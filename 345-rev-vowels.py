# see js file for thought process

class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])

        left = 0
        right = len(s) - 1

        letters = list(s)

        while left < right:
            if letters[left] in vowels and letters[right] in vowels:
                tmp = letters[left]
                letters[left] = letters[right]
                letters[right] = tmp
                left += 1
                right -= 1
            elif letters[left] in vowels:
                right -= 1
            elif letters[right] in vowels:
                left += 1
            else:
                left += 1
                right -= 1

        return "".join(letters)
