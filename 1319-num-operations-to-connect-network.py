# see js file for thought process

class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if n-1 > len(connections):
            return -1

        neighbors = {}
        visited = [False]*n

        for connection in connections:
            [first, second] = connection

            if first in neighbors:
                neighbors[first].append(second)
            else:
                neighbors[first] = [second]

            if second in neighbors:
                neighbors[second].append(first)
            else:
                neighbors[second] = [first]

        networkCount = 0

        def traverse(node):
            nonlocal networkCount
            visited[node] = True

            if node in neighbors:
                neighborNodes = neighbors[node]

                for neighborNode in neighborNodes:
                    if not visited[neighborNode]:
                        traverse(neighborNode)

        for node in range(n):
            if not visited[node]:
                networkCount += 1
                traverse(node)

        return networkCount - 1
