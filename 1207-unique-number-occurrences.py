# see js file for solution

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        freq = {}

        for i in range(len(arr)):
            if arr[i] not in freq:
                freq[arr[i]] = 1
            else:
                freq[arr[i]] += 1

        occurrences = list(freq.values())
        unique = set(occurrences)

        return len(occurrences) == len(unique)
