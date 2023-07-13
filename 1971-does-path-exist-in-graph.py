# see js file for thought process

class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = dict()
        visited = set()

        for [node1, node2] in edges:
            if node1 not in graph:
                graph[node1] = [node2]
            else:
                graph[node1].append(node2)

            if node2 not in graph:
                graph[node2] = [node1]
            else:
                graph[node2].append(node1)

        self.dfs(source, graph, visited)

        return destination in visited

    def dfs(self, node, graph, visited):
        visited.add(node)
        if node in graph:
            neighbors = graph[node]

            if neighbors:
                for neighbor in neighbors:
                    if neighbor not in visited:
                        self.dfs(neighbor, graph, visited)
