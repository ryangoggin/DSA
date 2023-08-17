# Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

# The distance between two adjacent cells is 1.

# Example 1:

# Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
# Output: [[0,0,0],[0,1,0],[0,0,0]]

# Example 2:

# Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
# Output: [[0,0,0],[0,1,0],[1,2,1]]

#############################################################

# dp
# 1.) update values through 2 passes
# 2.) first going left to right and top to bottom
# 3.) second going right to left and bottom to top

class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m = len(mat)
        n = len(mat[0])

        # first pass go left to right, up to down
        for row in range(m):
            for col in range(n):
                if mat[row][col] != 0:
                    top = mat[row-1][col] if row > 0 else float('inf')
                    left = mat[row][col-1] if col > 0 else float('inf')
                    mat[row][col] = min(top,left)+1
        # second pass go right to left, down to up
        for row in range(m-1, -1, -1):
            for col in range(n-1, -1, -1):
                right = mat[row][col+1] if col < n-1 else float('inf')
                down = mat[row+1][col] if row < m-1 else float('inf')
                mat[row][col] = min(mat[row][col], min(right, down)+1)

        return mat
