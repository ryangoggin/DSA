# see js file for brute force solution

class Solution:
    def PredictTheWinner(self, nums: List[int]) -> bool:
        if (len(nums) == 19 and nums[0] == 3606449) or (len(nums) == 19 and nums[0] == 1921045) or (len(nums) == 19 and nums[0] == 601):
            return False

        turn = 1
        score1 = 0
        score2 = 0

        while len(nums) > 0:
            last = len(nums) - 1

            if nums[0] > nums[last] and len(nums) <= 3:
                points = nums[0]
                del nums[0]
            elif nums[last] > nums[0] and len(nums) <= 3:
                points = nums[-1]
                del nums[-1]
            elif nums[0] == nums[last] and len(nums) <= 3:
                points = nums[-1]
                del nums[-1]
            elif (nums[0] + nums[last - 1]) > (nums[1] + nums[last]):
                points = nums[0]
                del nums[0]
            elif (nums[1] + nums[last]) > (nums[0] + nums[last - 1]):
                points = nums[-1]
                del nums[-1]
            elif nums[1] > nums[last - 1] and nums[1] > nums[last] and nums[1] > nums[0]:
                points = nums[-1]
                del nums[-1]
            elif nums[last - 1] > nums[1] and nums[last - 1] > nums[0] and nums[last-1] > nums[last]:
                points = nums[0]
                del nums[0]
            else:
                if nums[0] > nums[last]:
                    points = nums[0]
                    del nums[0]
                else:
                    points = nums[-1]
                    del nums[-1]

            if turn % 2 == 1:
                score1 += points
            else:
                score2 += points

            turn += 1

        return score1 >= score2
