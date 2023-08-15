# There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

# Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

# The test cases are generated so that the answer will be less than or equal to 2 * 109.

# Example 1:

# Input: m = 3, n = 7
# Output: 28

# Example 2:

# Input: m = 3, n = 2
# Output: 3
# Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
# 1. Right -> Down -> Down
# 2. Down -> Down -> Right
# 3. Down -> Right -> Down

###########################################################################

# 1.) edge case of grids of height or width 1, return 1
# 2.) make a dp array of 1s of n length
# 3.) iterate over 1-m and nested iterate over 1-n
# 3a.) increment dp[j] by it's previous index (dynamic programming to save computation time)
# 4.) after iteration is complete, return the n-1 index of dp array

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if m == 1 or n == 1:
            return 1

        dp = [1]*n

        for i in range(1,m):
            for j in range(1,n):
                dp[j] += dp[j-1]

        return dp[n-1]
