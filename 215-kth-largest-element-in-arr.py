# see js file for problem details

# 1.) set up min heap as a list
# 2.) iterate over nums and heappush each num into the built in heapq
# 3.) check if the min heap's length is greater than k
# 4.) if it is, use heappop on the min heap to keep removing the smallest element until it's the kth largest at the first index of min heap
# 5.) return the first index of the min heap as it is the kth largest
import heapq

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        min_heap = []

        for num in nums:
            heapq.heappush(min_heap, num)
            if len(min_heap) > k:
                heapq.heappop(min_heap)

        return min_heap[0]
