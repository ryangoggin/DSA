# see js files for thought process

# dfs

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(currPermutation, used):
            if len(currPermutation) == len(nums):
                res.append(currPermutation[:])
                return

            for i in range(len(nums)):
                if not used[i]:
                    currPermutation.append(nums[i])
                    used[i] = True
                    dfs(currPermutation, used)
                    currPermutation.pop()
                    used[i] = False

        dfs([], [False] * len(nums))
        return res

#  back tracking

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def backtrack(nums, currPermutation):
            if len(nums) == 0:
                res.append(currPermutation)
                return

            for i in range(len(nums)):
                left = nums[:i]
                right = nums[i+1:]
                backtrack(left + right, currPermutation + [nums[i]])

        backtrack(nums, [])
        return res
