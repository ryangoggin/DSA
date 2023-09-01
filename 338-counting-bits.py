# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

# Example 1:

# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10

# Example 2:

# Input: n = 5
# Output: [0,1,1,2,1,2]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# 3 --> 11
# 4 --> 100
# 5 --> 101

#####################################################################################

# brute force - O(n^2)
# 0.) make an ans array
# 1.) iterate 0 to n, convert each number to binary and trim off the 0b
# 2.) make a count variable
# 3.) iterate over the binary string and increment count every time there's a 1
# 4.) after inner iteration, push count to ans
# 5.) after outer iteration, return ans

class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []

        for i in range(n+1):
                binary = bin(i)
                trimmed = binary[2:]
                count = 0

                for j in range(len(trimmed)):
                    if trimmed[j] == "1":
                        count += 1

                ans.append(count)

        return ans
