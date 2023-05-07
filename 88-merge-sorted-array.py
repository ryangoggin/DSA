# look at js file for slower and faster solution reasoning

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for i in range(len(nums2)):
            print(nums1[i + m], nums2[i])
            nums1[i + m] = nums2[i]

        nums1.sort()
