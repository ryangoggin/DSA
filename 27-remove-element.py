# see reasoning in js file

# slightly different with methods in python, but same logic

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        for i in range(len(nums)):
            if val in nums:
                nums.remove(val)

        return len(nums)
