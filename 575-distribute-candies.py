# see js file for thought process

class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        n = len(candyType)
        maxCandy = int(n/2)
        res = 0
        unique = set()

        for i in range(n):
            if maxCandy == res:
                return maxCandy

            if candyType[i] not in unique:
                unique.add(candyType[i])
                res += 1
            else:
                continue

# faster, no iteration

class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        n = len(candyType)
        maxCandy = n//2
        unique = set(candyType)

        return min(maxCandy, len(unique))
