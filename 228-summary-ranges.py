# look at js for thought process, needed some extra conditionals for base bases,
# python has range errors to account for

class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []

        res = []
        range_start = nums[0]

        for i in range(len(nums)):
            if i+1 > (len(nums) - 1):
                if range_start == nums[i]:
                    res.append(str(nums[i]))
                else:
                    res.append(f"{range_start}->{nums[i]}")
            elif (nums[i] + 1) != nums[i+1]:
                if range_start == nums[i]:
                    res.append(str(nums[i]))
                else:
                    res.append(f"{range_start}->{nums[i]}")
                range_start = nums[i+1]

        return res
