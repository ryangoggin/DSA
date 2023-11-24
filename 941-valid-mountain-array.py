# see js file for thought process

class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) == 1:
            return False

        left = 0
        right = len(arr) - 1

        while (arr[left] < arr[left + 1]) or (arr[right] < arr[right - 1]):
            if arr[left] < arr[left + 1]:
                left += 1
                if left == len(arr) - 1:
                    return False

            if arr[right] < arr[right - 1]:
                right -= 1
                if right == 0:
                    return False

        if left != right:
            return False

        return True
