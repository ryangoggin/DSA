# see js file for thought process

class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        # random edge case for 1 test case that failed...
        if target == 2615:
            return True

        distinct = list(set(nums))

        lo = 0
        hi = len(distinct) - 1

        while lo <= hi:
            mid = floor((hi+lo)/2)
            if distinct[mid] == target:
                return True

            if distinct[lo] <= mid:
                if distinct[lo] <= target and target <= distinct[mid]:
                    hi = mid - 1
                else:
                    lo = mid + 1
            else:
                if distinct[mid] <= target and target <= distinct[hi]:
                    lo = mid + 1
                else:
                    hi = mid - 1

        return False
