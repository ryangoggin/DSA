# see js file for thought process

class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        def convert(timePoint):
            res = 0
            [h, m] = timePoint.split(":")

            res += int(h) * 60
            res += int(m)

            return res

        for i in range(len(timePoints)):
            timePoints[i] = convert(timePoints[i])

        sortedTP = sorted(timePoints)

        minDiff = 1440 - (sortedTP[-1] - sortedTP[0])

        for i in range(0, len(sortedTP) - 1):
            currDiff = sortedTP[i+1] - sortedTP[i]
            minDiff = min(currDiff, minDiff)

        return minDiff
