# see js file for thought process

class Solution:
    def simplifiedFractions(self, n: int) -> List[str]:
        if n < 2:
            return []

        res = []
        decimals = set()

        for num in range(1, n):
            for den in range(num+1, n+1):
                if num/den not in decimals:
                    fraction = str(num) + "/" + str(den)
                    res.append(fraction)
                    decimals.add(num/den)

        return res
