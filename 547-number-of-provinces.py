# see js file for thought process

class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        visited = set()
        res = 0

        def dfs(row):
            for col in range(len(isConnected[0])):
                if col not in visited and isConnected[row][col] == 1:
                    visited.add(col)
                    dfs(col)

        for row in range(len(isConnected)):
            if row not in visited:
                dfs(row)
                res += 1

        return res
