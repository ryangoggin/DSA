# see js file for thought process

class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split(" ")
        words.reverse()
        remove_spaces = filter(lambda x: x != "", words)

        return (" ").join(remove_spaces)
