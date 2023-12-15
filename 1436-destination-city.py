# see js file for thought process

class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        startCities = set()

        for path in paths:
            startCities.add(path[0])

        for path in paths:
            if path[1] not in startCities:
                return path[1]
