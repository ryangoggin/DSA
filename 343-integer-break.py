# Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.
# Return the maximum product you can get.

# Example 1:

# Input: n = 2
# Output: 1
# Explanation: 2 = 1 + 1, 1 × 1 = 1.

# Example 2:

# Input: n = 10
# Output: 36
# Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

##################################################################################################

# time - O(n^2) where n is n
# space - O(n) where n is n

# 1.) Create an array dp of size n+1 to store the maximum product for each integer from 1 to n.
# 2.) Initialize dp[1] = 1 since the maximum product for 1 is 1.
# 3.) Iterate from i = 2 to n and for each i, iterate from j = 1 to i-1.
# 4.) Calculate dp[i] as the maximum of dp[i], j * (i - j), and j * dp[i - j].
# 5.) The final answer is dp[n].

class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = -float('inf')
            for j in range(1, i):
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j])
        return dp[n]
