# see thought process in js file

class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        left = 0
        right = len(costs) - 1
        pq1 = []
        pq2 = []

        res = 0
        while k > 0:
            while len(pq1) < candidates and left <= right:
                heapq.heappush(pq1, costs[left])
                left += 1
            while len(pq2) < candidates and left <= right:
                heapq.heappush(pq2, costs[right])
                right -= 1

            min1 = pq1[0] if pq1 else float('inf')
            min2 = pq2[0] if pq2 else float('inf')

            if min1 <= min2:
                res += min1
                heapq.heappop(pq1)
            else:
                res += min2
                heapq.heappop(pq2)

            k -= 1
        return res
