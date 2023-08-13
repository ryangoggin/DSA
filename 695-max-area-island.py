# see js file for thought process

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        currArea = 0
        maxArea = 0

        def countArea(row, col):
            nonlocal currArea
            grid[row][col] = 0
            currArea += 1

            # up
            if row-1 >= 0:
                if grid[row-1][col] == 1:
                    countArea(row-1, col)

            # down
            if row+1 < m:
                if grid[row+1][col] == 1:
                    countArea(row+1, col)

            # left
            if col-1 >= 0:
                if grid[row][col-1] == 1:
                    countArea(row, col-1)

            # right
            if col+1 < n:
                if grid[row][col+1] == 1:
                    countArea(row, col+1)

        for row in range(m):
            for col in range(n):
                if grid[row][col] == 1:
                    countArea(row,col)
                    maxArea = max(currArea, maxArea)
                    currArea = 0

        return maxArea
