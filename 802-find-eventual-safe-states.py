# see js file for thought process
class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        res = []
        visited = {}

        for i in range(len(graph)):
            if self.isSafe(graph, i, visited):
                res.append(i)

        return res

    def isSafe(self, graph, node, visited):
        if node in visited:
            if visited[node] == True:
                return False
            if visited[node] == "safe":
                return True

        visited[node] = True

        for neighbor in graph[node]:
            if not self.isSafe(graph, neighbor, visited):
                return False

        visited[node] = "safe"
        return True
