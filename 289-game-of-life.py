# According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

# The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

# Any live cell with fewer than two live neighbors dies as if caused by under-population.
# Any live cell with two or three live neighbors lives on to the next generation.
# Any live cell with more than three live neighbors dies, as if by over-population.
# Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
# The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

# Example 1:

# Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
# Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

# Example 2:

# Input: board = [[1,1],[1,0]]
# Output: [[1,1],[1,1]]

######################################################################################
# time: O(mxn) where m and n are board dimensions
# space: O(mxn) where m and n are board dimensions --> use the nextState matrix
# 1.)  create a next state matrix of zeros the same dimensions as the board to store the number of live neighbors of each cell
# 2.) make a helper fxn to count the live neighbors of a cell
# 3.) iterate across board and set each cell of the next state matrix to the return of the helper for that cell of the board
# 4.) iterate across the board again and set conditionals for the 4 rules of the game of life
# 5.) don't need to return the board since it was done in place

class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m = len(board)
        n = len(board[0])

        nextState = []
        for row in board:
            nextRow = [0] * len(row)
            nextState.append(nextRow)

        def countLiveNeighbors(row, col):
            counter = 0
            # up
            if row > 0:
                if board[row-1][col] == 1:
                    counter += 1
                # up left
                if col > 0:
                    if board[row-1][col-1] == 1:
                        counter += 1
                # up right
                if col < n-1:
                    if board[row-1][col+1] == 1:
                        counter += 1
            # down
            if row < m-1:
                if board[row+1][col] == 1:
                    counter += 1
                # down left
                if col > 0:
                    if board[row+1][col-1] == 1:
                        counter += 1
                # down right
                if col < n-1:
                    if board[row+1][col+1] == 1:
                        counter += 1
            # left
            if col > 0:
                if board[row][col-1] == 1:
                    counter += 1
            # right
            if col < n-1:
                if board[row][col+1] == 1:
                    counter += 1

            return counter

        for row in range(m):
            for col in range(n):
                neighbors = countLiveNeighbors(row, col)
                nextState[row][col] = neighbors

        for row in range(m):
            for col in range(n):
                # case 1-3
                if board[row][col] == 1:
                    # case 1
                    if nextState[row][col] < 2:
                        board[row][col] = 0
                    # case 2
                    elif 1 < nextState[row][col] < 4:
                        continue
                    # case 3
                    else:
                        board[row][col] = 0
                # case 4
                else:
                    if nextState[row][col] == 3:
                        board[row][col] = 1
