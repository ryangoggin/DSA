# given matrix and target, return true if target in matrix, false if not

# 1.) iterate over each row on the matrix
# 2.) check if target is less than the last element of the row (this is the only row it could be in)
# 3.) return the resulting boolean of checking if the target is in that row

# doesn't use binary search
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in range(len(matrix)):
            if target <= matrix[row][-1]:
                return target in matrix[row]
