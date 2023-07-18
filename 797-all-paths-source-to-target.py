# see js file for thought process

class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        def dfs(curr, path):
            if path[len(path) - 1] == len(graph) - 1:
                res.append(path)
                return None
            for i in range(len(graph[curr])):
                dfs(graph[curr][i], path + [graph[curr][i]])

        res = []

        dfs(0, [0])

        return res
