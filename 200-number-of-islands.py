# see js file for thought process

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        numIslands = 0
        m = len(grid)
        n = len(grid[0])

        def sinkIsland(row, col):
            grid[row][col] = "0"

            # up
            if row-1 >= 0:
                if grid[row-1][col] == "1":
                    sinkIsland(row-1, col)

            # down
            if row+1 < m:
                if grid[row+1][col] == "1":
                    sinkIsland(row+1, col)

            # left
            if col-1 >= 0:
                if grid[row][col-1] == "1":
                    sinkIsland(row, col-1)

            # right
            if col+1 < n:
                if grid[row][col+1] == "1":
                    sinkIsland(row, col+1)

        for row in range(m):
            for col in range(n):
                if grid[row][col] == "1":
                    numIslands += 1
                    sinkIsland(row, col)

        return numIslands
