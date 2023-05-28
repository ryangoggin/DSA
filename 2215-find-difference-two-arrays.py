# see js file for thought process

class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        ans = [[], []]

        set1 = set(nums1)
        set2 = set(nums2)

        unique1 = list(set1)
        unique2 = list(set2)

        for i in range(len(unique1)):
            if unique1[i] not in set2:
                ans[0].append(unique1[i])

        for i in range(len(unique2)):
            if unique2[i] not in set1:
                ans[1].append(unique2[i])

        return ans
