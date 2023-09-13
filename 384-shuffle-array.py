# Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

# Implement the Solution class:

# Solution(int[] nums) Initializes the object with the integer array nums.
# int[] reset() Resets the array to its original configuration and returns it.
# int[] shuffle() Returns a random shuffling of the array.

# Example 1:

# Input
# ["Solution", "shuffle", "reset", "shuffle"]
# [[[1, 2, 3]], [], [], []]
# Output
# [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

# Explanation
# Solution solution = new Solution([1, 2, 3]);
# solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
#                        // Any permutation of [1,2,3] must be equally likely to be returned.
#                        // Example: return [3, 1, 2]
# solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
# solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

##########################################################################################

# 1.) set self.nums to the nums array passed in
# 2.) reset just returns self.nums (don't edit this array to maintain the original)
# 3.) have a res array for the suffled array and an indices array to hold all the inidices of nums
# 4.) while there are indices in the indices array, randomly pick one and add that index of nums to the res array
# 5.) return res


import random

class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums


    def reset(self) -> List[int]:
        return self.nums


    def shuffle(self) -> List[int]:
        res = []
        indices = []

        for i in range(len(self.nums)):
            indices.append(i)

        while len(indices) > 0:
            index = random.randint(0, len(indices)-1)
            res.append(self.nums[indices[index]])
            del indices[index]

        return res
