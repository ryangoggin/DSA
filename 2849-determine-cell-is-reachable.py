# You are given four integers sx, sy, fx, fy, and a non-negative integer t.
# In an infinite 2D grid, you start at the cell (sx, sy). Each second, you must move to any of its adjacent cells.
# Return true if you can reach cell (fx, fy) after exactly t seconds, or false otherwise.
# A cell's adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.

# Example 1:

# Input: sx = 2, sy = 4, fx = 7, fy = 7, t = 6
# Output: true
# Explanation: Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by going through the cells depicted in the picture above.

# Example 2:

# Input: sx = 3, sy = 1, fx = 7, fy = 3, t = 3
# Output: false
# Explanation: Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by going through the cells depicted in the picture above. Hence, we cannot reach cell (7, 3) at the third second.

####################3###############################################################################

# time - O(1), space - O(1)
# 1.) get the abs distance in the x and y direction from source to finish
# 2.) 2 cases to consider with these distances
# 2a.) if both are 0, start and finish are the same spot --> just need t to be over 1 to be able to successfully reach
# 2b.) they both aren't 0 --> can only ssuccessfully reach if both distances are less than or equal to t

class Solution:
    def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
        x_dist = abs(sx - fx)
        y_dist = abs(sy - fy)

        if x_dist == 0 and y_dist  == 0:
            if t != 1:
                return True
            else:
                return False

        if x_dist <= t and y_dist <= t:
            return True
        else:
            return False
