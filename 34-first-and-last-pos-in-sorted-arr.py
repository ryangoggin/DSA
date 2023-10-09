# see js file for thought process, needed some additional conditionals for dealing with index errors in python

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) > 1:
            if nums[0] == target and nums[-1] == target:
                return [0, len(nums) - 1]

        foundPos = -1
        found = False
        hi = len(nums) - 1
        lo = 0

        while lo <= hi:
            mid = (hi+lo)//2

            if nums[mid] == target:
                found = True
                foundPos = mid
                break
            elif nums[mid] > target:
                hi = mid - 1
            else:
                lo = mid + 1

        if not found:
            return [-1, -1]

        start, end = foundPos, foundPos
        targetStart, targetEnd = None, None

        while nums[start] == target:
            if start == 0:
                targetStart = True
                break
            start -= 1

        while nums[end] == target:
            if end == len(nums)-1:
                targetEnd = True
                break
            end += 1

        if targetStart and targetEnd:
            return [start, end]
        elif targetStart:
            return [start, end - 1]
        elif targetEnd:
            return [start + 1, end]
        else:
            return [start + 1, end - 1]
