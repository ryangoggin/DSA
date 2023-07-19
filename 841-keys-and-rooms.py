# see js file for thought process

class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        numRooms = len(rooms)

        visited = set()

        def dfs(room):
            neighbors = rooms[room]

            for neighbor in neighbors:
                if neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor)
            return None

        visited.add(0)
        dfs(0)

        return len(visited) == numRooms
