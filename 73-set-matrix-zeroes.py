

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
