# see js file for thought process

class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        if len(dist) > ceil(hour):
            return -1

        minSpeed = 1
        maxSpeed = 1000000000
        optimal = maxSpeed

        while maxSpeed >= minSpeed:
            mid = ceil((minSpeed+maxSpeed)/2)
            currTime = self.time(mid, dist)

            if currTime <= hour:
                optimal = mid
                maxSpeed = mid - 1
            else:
                minSpeed = mid + 1

        return optimal

    def time(self, speed, dist):
        tot = 0

        for i in range(len(dist)):
            if i != len(dist) - 1:
                tot += ceil(dist[i]/speed)
            else:
                tot += dist[i]/speed

        return tot
