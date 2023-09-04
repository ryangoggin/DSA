# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

# Example 1:

# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2]

# Example 2:

# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [9,4]
# Explanation: [4,9] is also accepted.

##############################################################

# O(n)
# 0.) make an empty res array to store intersections
# 1.) make a unique list (list -> set -> list) for nums1
# 2.) make a set for nums2
# 3.) iterate over unique list, push num into res if it is in the other set
# 4.) return res

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        unique1 = list(set(nums1))
        set2 = set(nums2)
        res = []

        for num in unique1:
            if num in set2:
                res.append(num)

        return res
