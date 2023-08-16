# Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

# A region is captured by flipping all 'O's into 'X's in that surrounded region.

# Example 1:

# Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
# Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
# Explanation: Notice that an 'O' should not be flipped if:
# - It is on the border, or
# - It is adjacent to an 'O' that should not be flipped.
# The bottom 'O' is on the border, so it is not flipped.
# The other three 'O' form a surrounded region, so they are flipped.

# Example 2:

# Input: board = [["X"]]
# Output: [["X"]]

#############################################################################################

# 1.) make a borderDFS that will only be used on Os in the border
# 2.) convert those Os in regions touching the border to "don't flip"
# 3.) iterate over the whole board and flip remaining Os to Xs as they are surrounded
# 4.) iterate over the board again and flip "don't flip"s back to Os
# 5.) return the board


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m = len(board)
        n = len(board[0])

        def borderDFS(row, col):
            board[row][col] = "don't flip"

            # up
            if row-1 >= 0:
                if board[row-1][col] == "O":
                    borderDFS(row-1, col)

            # down
            if row+1 < m:
                if board[row+1][col] == "O":
                    borderDFS(row+1, col)

            # left
            if col-1 >= 0:
                if board[row][col-1] == "O":
                    borderDFS(row, col-1)

            # right
            if col+1 < n:
                if board[row][col+1] == "O":
                    borderDFS(row, col+1)

        # mark all non-surrounded regions by detecting "O"s on the border so normal DFS gets only surrounded regions
        # top and bottom
        for col in range(n):
            # top
            if board[0][col] == "O":
                borderDFS(0, col)

            # bottom
            if board[m-1][col] == "O":
                borderDFS(m-1, col)

        # left and right
        for row in range(m):
            # left
            if board[row][0] == "O":
                borderDFS(row, 0)

            # right
            if board[row][n-1] == "O":
                borderDFS(row, n-1)

        # iterate over board and convert surround regions to "X"s
        for row in range(m):
            for col in range(n):
                if board[row][col] == "O":
                    board[row][col] = "X"

        # now that surrounded regions are converted. return don't flips to "O"s
        for row in range(m):
            for col in range(n):
                if board[row][col] == "don't flip":
                    board[row][col] = "O"

        return board
