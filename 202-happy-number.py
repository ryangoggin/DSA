# see solution reasoning in js file

class Solution:
    def isHappy(self, n: int) -> bool:
        string = str(n)

        if len(string) == 1:
            return n == 1 or n == 7

        newNum = 0

        for i in range(len(string)):
            num = int(string[i])
            squared = num * num
            newNum += squared

        return self.isHappy(newNum)
