# see js file for thought process

class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxA = 0
        left = 0
        right = len(height) - 1

        while left < right:
            short_side = min(height[left], height[right])
            area = short_side * (right - left)

            maxA = max(maxA, area)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return maxA
