# look at js file for reasoning

class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
        if len(stones) == 0:
            return 0

        while len(stones) > 1:
            stones.sort()
            new_stone = stones[-1] - stones[-2]
            del stones[-1]
            del stones[-1] #2nd heaviest becomes -1 index
            stones.append(new_stone)

        return stones[0]
