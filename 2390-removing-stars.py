# see js file for thought process

class Solution:
    def removeStars(self, s: str) -> str:
        stack = []

        for char in s:
            if char == "*":
                del stack[-1]
            else:
                stack.append(char)

        return "".join(stack)
