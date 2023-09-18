# You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

# A row i is weaker than a row j if one of the following is true:

# The number of soldiers in row i is less than the number of soldiers in row j.
# Both rows have the same number of soldiers and i < j.
# Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.



# Example 1:

# Input: mat =
# [[1,1,0,0,0],
#  [1,1,1,1,0],
#  [1,0,0,0,0],
#  [1,1,0,0,0],
#  [1,1,1,1,1]],
# k = 3
# Output: [2,0,3]
# Explanation:
# The number of soldiers in each row is:
# - Row 0: 2
# - Row 1: 4
# - Row 2: 1
# - Row 3: 2
# - Row 4: 5
# The rows ordered from weakest to strongest are [2,0,3,1,4].
# Example 2:

# Input: mat =
# [[1,0,0,0],
#  [1,1,1,1],
#  [1,0,0,0],
#  [1,0,0,0]],
# k = 2
# Output: [0,2]
# Explanation:
# The number of soldiers in each row is:
# - Row 0: 1
# - Row 1: 4
# - Row 2: 1
# - Row 3: 1
# The rows ordered from weakest to strongest are [0,2,3,1].

#######################################################################
# time: O(nlogn) where n is number of rows (sorting them)
# space: O(n) where n is the number of rows

# 0.) make an empty res list
# 1.) get the strength of each row in a dict
# 2.) convert the dict to its items
# 3.) sort the items by their strength
# 4.) iterate over k, append the row of each of the k weakest rows to res
# 5.) return res

class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        strength = {}
        res = []

        for i in range(len(mat)):
            strength[i] = 0
            for person in mat[i]:
                if person == 1:
                    strength[i] += 1
                else:
                    continue

        entries = list(strength.items())
        entries.sort(key = lambda x: x[1])

        for i in range(k):
            res.append(entries[i][0])

        return res
