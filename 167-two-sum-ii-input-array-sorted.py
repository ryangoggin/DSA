# see js file for thought process

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        p1 = 0
        p2 = len(numbers) - 1

        while numbers[p1] + numbers[p2] != target:
            if numbers[p1] + numbers[p2] > target:
                p2 -= 1
            else:
                p1 += 1

        return [p1+1, p2+1]
