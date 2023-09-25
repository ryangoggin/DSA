# see thought process in js file

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        list1 = sorted(list(s))
        list2 = sorted(list(t))

        for i in range(len(list1)):
            if list1[i] != list2[i]:
                return list2[i]

        return list2[-1]
