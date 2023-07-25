# see js file for thought process

class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        hi = len(arr) - 1
        lo = 0

        while hi >= lo:
            mid = ceil((hi+lo)/2)
            before = mid - 1
            after = mid + 1

            if arr[mid] > arr[before] and arr[mid] > arr[after]:
                return mid
            elif arr[mid] > arr[before] and arr[mid] < arr[after]:
                lo = mid + 1
            else:
                hi = mid - 1
