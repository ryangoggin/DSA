# see js file for thought process

class Solution:
    def largestOddNumber(self, num: str) -> str:
        res = ""

        for i in range(len(num)-1, -1, -1):
            if int(num[i]) % 2 == 1:
                res = num[:i+1]
                break

        return res
