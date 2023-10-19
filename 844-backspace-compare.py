# Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
# Note that after backspacing an empty text, the text will continue empty.

# Example 1:

# Input: s = "ab#c", t = "ad#c"
# Output: true
# Explanation: Both s and t become "ac".

# Example 2:

# Input: s = "ab##", t = "c#d#"
# Output: true
# Explanation: Both s and t become "".

# Example 3:

# Input: s = "a#c", t = "b"
# Output: false
# Explanation: s becomes "c" while t becomes "b".

############################################################

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        res_s = []
        res_t = []

        for i in range(len(s)):
            if s[i] == "#" and len(res_s) > 0:
                del res_s[-1]
            elif s[i] == "#" and len(res_s) == 0:
                continue
            else:
                res_s.append(s[i])

        for i in range(len(t)):
            if t[i] == "#" and len(res_t) > 0:
                del res_t[-1]
            elif t[i] == "#" and len(res_t) == 0:
                continue
            else:
                res_t.append(t[i])

        return "".join(res_s) == "".join(res_t)
