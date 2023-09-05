# see js file for thought process

class Solution:
    def removeDuplicates(self, s: str) -> str:
        res = []

        for i in range(len(s)):
            # need this for when res stack is empty
            if len(res) == 0:
                res.append(s[i])
                continue

            if s[i] != res[-1]:
                res.append(s[i])
            else:
                res.pop()

        return "".join(res)
