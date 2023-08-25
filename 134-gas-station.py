# see js file for thought process

class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        totalTank = 0
        currTank = 0
        pos = 0

        for i in range(len(gas)):
            currTank += gas[i] - cost[i]
            totalTank += gas[i] - cost[i]

            if currTank < 0:
                currTank = 0
                pos = i + 1


        if totalTank < 0:
            return -1
        else:
            return pos
