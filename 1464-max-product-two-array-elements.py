# see js file for thought process

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort(reverse=True)

        return (nums[0]-1) * (nums[1]-1)

# faster O(n) solution

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        largest = float('-inf')
        second_largest = nums[0]

        for num in nums:
            if num > largest:
                second_largest = largest
                largest = num
            elif largest >= num > second_largest:
                second_largest = num

        return (largest - 1) * (second_largest - 1)
