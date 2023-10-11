# see js file for thought process

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        res = [0] * len(temperatures)

        for i in range(len(temperatures)):
            while len(stack) and temperatures[i] > temperatures[stack[len(stack) - 1]]:
                temp = stack.pop()
                res[temp] = i - temp

            stack.append(i)

        return res
