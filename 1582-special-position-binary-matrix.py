# Given an m x n binary matrix mat, return the number of special positions in mat.
# A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

# Example 1:
# Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
# Output: 1
# Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

# Example 2:
# Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
# Output: 3
# Explanation: (0, 0), (1, 1) and (2, 2) are special positions.

################################################################

# O(m*n*z) where m is rows, n is cols, z is number of 1s in the matrix
# 1.) use two helpers to check if other elements in that row or col are also 1
# 2.) iterate over the matrix, if the current element is a 1 check if both helpers return true and increment the result if they are as it is a special position
# 3.) return res after iterating

class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        m = len(mat)
        n = len(mat[0])
        res = 0


        def rowCheck(row, col):
            for currCol in range(n):
                if mat[row][currCol] == 1 and currCol != col:
                    return False

            return True

        def colCheck(row, col):
            for currRow in range(m):
                if mat[currRow][col] == 1 and currRow != row:
                    return False

            return True

        for row in range(m):
            for col in range(n):
                if mat[row][col] == 1:
                    if rowCheck(row, col) and colCheck(row, col):
                        res += 1

        return res
