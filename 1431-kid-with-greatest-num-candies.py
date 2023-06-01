# see js file for thought process

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_candies = max(*candies)
        res = []

        for i in range(len(candies)):
            if candies[i] + extraCandies >= max_candies:
                res.append(True)
            else:
                res.append(False)

        return res
