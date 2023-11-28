# see js file for thought process

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m = len(nums1)
        n = len(nums2)

        pointer1 = 0
        pointer2 = 0
        merged = []

        while pointer1 < m and pointer2 < n:
            if nums1[pointer1] < nums2[pointer2]:
                merged.append(nums1[pointer1])
                pointer1 += 1
            else:
                merged.append(nums2[pointer2])
                pointer2 += 1

        while pointer1 < m:
            merged.append(nums1[pointer1])
            pointer1 += 1

        while pointer2 < n:
            merged.append(nums2[pointer2])
            pointer2 += 1

        mid = (m+n)//2

        if (m+n)%2 == 1:
            return merged[mid]
        else:
            return (merged[mid-1] + merged[mid])/2
