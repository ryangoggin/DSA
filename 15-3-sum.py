# return list of all unique triplets that add to 0

# 1.) Split nums into three lists: negative numbers, positive numbers, and zeros
# 2.) Create a separate set for negatives and positives for O(1) look-up times
# 3.) If there is at least 1 zero in the list, add all cases where -num exists in N and num exists in P
# 4.) If there are at least 3 zeros in the list then also include (0, 0, 0) = 0
# 5.) For all pairs of negative numbers, check to see if their complement (4) exists in the positive number set
# 6.) For all pairs of positive numbers, check to see if their complement (-2) exists in the negative number set

# time: O(n^2)

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = set()
        negatives = []
        positives = []
        zeroes = []

        for num in nums:
            if num > 0:
                positives.append(num)
            elif num < 0:
                negatives.append(num)
            else:
                zeroes.append(num)

        unique_pos = set(positives)
        unique_neg = set(negatives)

        if zeroes:
            for num in unique_pos:
                if (-1 * num) in unique_neg:
                    res.add((-1*num, 0, num))

        if len(zeroes) > 2:
            res.add((0, 0, 0))

        for i in range(len(negatives)):
            for j in range(i + 1, len(negatives)):
                target = -1 * (negatives[i] + negatives[j])
                if target in unique_pos:
                    res.add(tuple(sorted([negatives[i], negatives[j], target])))

        for i in range(len(positives)):
            for j in range(i + 1, len(positives)):
                target = -1 * (positives[i] + positives[j])
                if target in unique_neg:
                    res.add(tuple(sorted([positives[i], positives[j], target])))

        return res
