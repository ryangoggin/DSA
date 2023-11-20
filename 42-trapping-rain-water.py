# see js file for thought process

class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) == 0 or height == None:
            return 0

        res = 0

        left = 0
        right = len(height) - 1

        leftMax = 0
        rightMax = 0

        while (left < right):
            leftMax = max(leftMax, height[left])
            if height[left] < leftMax:
                res += leftMax - height[left]

            rightMax = max(rightMax, height[right])
            if height[right] < rightMax:
                res += rightMax - height[right]

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return res
