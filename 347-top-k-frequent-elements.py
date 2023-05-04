# look at js file for reasoning

# .items() is similar to Object.entries()
# sorted uses a lambda function like how sort uses an anonymous function

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency = {}
        res = []

        for num in nums:
            if num not in frequency.keys():
                frequency[num] = 1
            else:
                frequency[num] += 1

        desc_sorted_items = sorted(list(frequency.items()), key = lambda x : x[1], reverse=True)

        for i in range(k):
            res.append(desc_sorted_items[i][0])

        return res
