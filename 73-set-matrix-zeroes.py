# Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
# You must do it in place.

# Example 1:

# Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
# Output: [[1,0,1],[0,0,0],[1,0,1]]

# Example 2:


# Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
# Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

####################################################################
# iterative approach
# time: O(mxn) where m and n are dimensions of the matrix
# 1.) make two sets to hold the cols and rows that have 0s and need to be converted
# 2.) iterate over the matrix and add row and col to the appropriate sets whenever there's a 0
# 3.) iterate over the rows in the row set and iterate over each col, convert all to 0
# 4.) iterate over the cols in the col set and iterate over each row, convert all to 0
# 5.) return matrix

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows = set()
        cols = set()

        m = len(matrix)
        n = len(matrix[0])


        for row in range(m):
            for col in range(n):
                if matrix[row][col] == 0:
                    rows.add(row)
                    cols.add(col)

        for row in list(rows):
            for col in range(n):
                matrix[row][col] = 0

        for col in list(cols):
            for row in range(m):
                matrix[row][col] = 0

        return matrix
