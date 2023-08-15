# On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).

# A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.


# Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

# The knight continues moving until it has made exactly k moves or has moved off the chessboard.

# Return the probability that the knight remains on the board after it has stopped moving.

# Example 1:

# Input: n = 3, k = 2, row = 0, column = 0
# Output: 0.06250
# Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
# From each of those positions, there are also two moves that will keep the knight on the board.
# The total probability the knight stays on the board is 0.0625.

# Example 2:

# Input: n = 1, k = 0, row = 0, column = 0
# Output: 1.00000

##########################################################

# 1.) make a list of possible moves
# 2.) make a helper to check if a function is inbounds (return True if yes, False if no)
# 3.) make a dp function to get probability (@cache decorator for memoization)
# 3a.) base case 1: spot is not inbounds --> return 0
# 3b.) base case 2: k is 0, aka no moves left --> return 1
# 3c.) recursive case: iterate through each move, return the sum of 1/8 * each call with k reduced by 1 and row and col w/ moves added to them
# 4.) return the dp fxn called on the passed in args

class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        # list of all possible moves
        moves = [[1,2], [1,-2], [-1,2], [-1,-2], [2,1], [2,-1], [-2,1], [-2,-1]]

        # check if piece is on the board still
        def isInbounds(row, col):
            return 0 <= row < n and 0 <= col < n

        # need cache decorator for memoization for time optimization
        @cache
        # dp that recursively gets probablity at each move and checks if in bounds
        def dp(row, col, k):
            # base case where piece moves out of bounds
            if not isInbounds(row, col):
                return 0

            # other base case when no moves left
            if k == 0:
                return 1

            # return the sum of all probabilities that knight is inbounds after k moves
            return sum(1/8 * dp(row+dx, col+dy, k-1) for dx,dy in moves)

        return dp(row, column, k)
