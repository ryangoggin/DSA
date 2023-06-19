# see js file for thought process

class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        alt = 0
        max_alt = 0

        for change in gain:
            alt += change
            max_alt = max(alt, max_alt)

        return max_alt
