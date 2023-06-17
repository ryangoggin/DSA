# see js file for thought process

class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        x = coordinates[0][0]
        matching_x = 0

        for coordinate in coordinates:
            if coordinate[0] == x:
                matching_x += 1

        if matching_x == len(coordinates):
            return True

        coord1 = coordinates[0]
        coord2 = coordinates[1]

        if (coord2[0] - coord1[0]) == 0:
                return False

        slope = (coord2[1] - coord1[1])/(coord2[0] - coord1[0])

        for i in range(1, len(coordinates) - 1):
            coord1 = coordinates[i]
            coord2 = coordinates[i + 1]

            if (coord2[0] - coord1[0]) == 0:
                return False

            curr_slope = (coord2[1] - coord1[1])/(coord2[0] - coord1[0])

            if curr_slope != slope:
                return False

        return True
