# see js file for thought process

class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        res = []

        distances = []
        for distance in range(rows + cols):
            distances.append([])

        for row in range(rows):
            for col in range(cols):
                distance = abs(row - rCenter) + abs(col - cCenter)

                distances[distance].append([row, col])

        for distance in distances:
            res += distance

        return res
