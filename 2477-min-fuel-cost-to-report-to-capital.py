# see js file for thought process

class Solution:
    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
        graph = dict()

        res = 0

        for road in roads:
            [node1, node2] = road

            if node1 not in graph:
                graph[node1] = [node2]
            else:
                graph[node1].append(node2)

            if node2 not in graph:
                graph[node2] = [node1]
            else:
                graph[node2].append(node1)

        def dfs(curr, prev):
            nonlocal res
            people = 1
            neighbors = graph.get(curr)

            if neighbors:
                for neighbor in neighbors:
                    if neighbor != prev:
                        people += dfs(neighbor, curr)

            if curr != 0:
                res += ceil(people/seats)

            return people

        dfs(0, -1)

        return res
