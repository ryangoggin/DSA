# Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Example 1:

# Input: rowIndex = 3
# Output: [1,3,3,1]

# Example 2:

# Input: rowIndex = 0
# Output: [1]

# Example 3:

# Input: rowIndex = 1
# Output: [1,1]

#####################################################################

# time: O(n) - n is length of the row

# 1.) start the res w/ 1 in a list
# 2.) track the  previous value -> starts at 1
# 3.) iterate from 1 to the rowIndex given (this give the right length row)
# 4.) get the next val using the formula written below
# 5.) append that val to res and then update prev to that next val
# 6.) return that res

class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        res = [1]
        prev = 1

        for i in range(1, rowIndex+1):
            next_val = prev * (rowIndex - i + 1) // i
            res.append(next_val)
            prev = next_val

        return res
