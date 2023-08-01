# see js file for thought process

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []

        def backtrack(first, currComb):
            if len(currComb) == k:
                res.append(currComb[:])
                return

            for i in range(first, n+1):
                currComb.append(i)
                backtrack(i+1, currComb)
                currComb.pop()

        backtrack(1, [])
        return res
