# see js file for thought process

class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        potions.sort()
        res = []

        for i in range(len(spells)):
            lo = 0
            hi = len(potions)-1

            while hi >= lo:
                mid = floor((hi+lo)/2)

                if spells[i]*potions[mid] >= success:
                    hi = mid-1
                else:
                    lo = mid+1

            print(mid)

            if spells[i]*potions[mid] >= success:
                res.append(len(potions)-mid)
            else:
                potentialPairs = len(potions)-mid-1
                if potentialPairs < 0:
                    potentialPairs = 0
                res.append(potentialPairs)

        return res
