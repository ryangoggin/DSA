# The chess knight has a unique movement, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagaram:
# A chess knight can move as indicated in the chess diagram below:

# We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell (i.e. blue cell).
# Given an integer n, return how many distinct phone numbers of length n we can dial.
# You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.
# As the answer may be very large, return the answer modulo 109 + 7.

# Example 1:
# Input: n = 1
# Output: 10
# Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.

# Example 2:
# Input: n = 2
# Output: 20
# Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]

# Example 3:
# Input: n = 3131
# Output: 136006598
# Explanation: Please take care of the mod.

##################################################################################################################################

# Initialization:
# Initialize a 2D array dp of size n x 10, where n is the length of the phone number and 10 represents the possible digits.
# Set the values in the first row of dp to 1 because there is only one way to reach each digit from the starting position (the knight is already there).

# DynamicProgrammingIteration:
# Use a nested loop structure to iterate over the steps (i) and digits (j).
# For each step and digit, iterate over the possible next moves from the current digit according to the valid knight moves.
# Update the count in dp[i][j] by adding the counts from the previous step (dp[i-1][next]), considering all possible moves.
# Take the result modulo 1_000_000_007 to handle large numbers.

# ResultCalculation:
# After completing the dynamic programming steps, calculate the final result by summing up the counts for each digit in the last row of dp.
# Return the result modulo 1_000_000_007 as the answer may be very large.

class Solution:
    def knightDialer(self, n: int) -> int:
        @lru_cache(None)
        def helper(n, row, col):
            if n == 0:
                return 1

            res = 0

            for move_row, move_col in [[2,1], [1,2], [-2,1], [-1,2], [2,-1], [1,-2], [-2,-1], [-1,-2]]:
                next_row = row + move_row
                next_col = col + move_col

                if (-1<next_row<3 and -1<next_col<3) or (next_row==3 and next_col==1):
                    res += helper(n-1, next_row, next_col)
            return res % (10**9+7)

        res = helper(n-1, 3, 1)

        for row in range(3):
            for col in range(3):
                res += helper(n-1, row, col)

        return res % (10**9+7)
