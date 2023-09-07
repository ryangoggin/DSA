# see js file for thought process

class Solution:
    def checkIfCanBreak(self, s1: str, s2: str) -> bool:
        list1 = list(s1)
        list2 = list(s2)

        list1.sort()
        list2.sort()

        first_counter = 0

        for i in range(len(list1)):
            if list1[i] < list2[i]:
                break
            first_counter += 1

        if first_counter == len(list1):
            return True

        for i in range(len(list1)):
            if list1[i] > list2[i]:
                return False

        return True
