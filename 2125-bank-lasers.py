# Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.
# There is one laser beam between any two security devices if both conditions are met:

# The two devices are located on two different rows: r1 and r2, where r1 < r2.
# For each row i where r1 < i < r2, there are no security devices in the ith row.
# Laser beams are independent, i.e., one beam does not interfere nor join with another.

# Return the total number of laser beams in the bank.

# Example 1:
# Input: bank = ["011001","000000","010100","001000"]
# Output: 8
# Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
#  * bank[0][1] -- bank[2][1]
#  * bank[0][1] -- bank[2][3]
#  * bank[0][2] -- bank[2][1]
#  * bank[0][2] -- bank[2][3]
#  * bank[0][5] -- bank[2][1]
#  * bank[0][5] -- bank[2][3]
#  * bank[2][1] -- bank[3][2]
#  * bank[2][3] -- bank[3][2]
# Note that there is no beam between any device on the 0th row with any on the 3rd row.
# This is because the 2nd row contains security devices, which breaks the second condition.

# Example 2:
# Input: bank = ["000","111","000"]
# Output: 0
# Explanation: There does not exist two devices located on two different rows.

##########################################################################

# time: O(m*n) where m and n are dimensions of bank matrix
# 1.) calc number of lasers between rows by tracking prev row's beams and current row's beams
# 2.) if the current row has no beams, skip setting prev row beams from that row (use a boolean flag that is set based on if num beams is 0 at the end of couting)
# 3.) always increment res by prev row beams * curr row beams
# 4.) return the res


class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        res = 0
        preRowBeams = 0
        rowBeams = 0
        skipRow = False

        for row in range(len(bank)):
            if not skipRow:
                preRowBeams = rowBeams

            rowBeams = 0

            for col in range(len(bank[row])):
                if bank[row][col] == "1":
                    rowBeams += 1

            res += (preRowBeams * rowBeams)

            if rowBeams == 0:
                skipRow = True
            else:
                skipRow = False

        return res
