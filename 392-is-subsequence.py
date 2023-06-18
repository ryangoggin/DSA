# see js file for thought process

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if s == "":
            return True

        match = 0
        s_pointer = 0

        for t_pointer in range(len(t)):
            if t[t_pointer] == s[s_pointer]:
                match +=1
                s_pointer += 1
                if s_pointer == len(s):
                    return True

        return False
