# see js file for thougt process

class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        lst = list(string)
        start = 0
        end = len(lst) - 1

        while start <= end:
            if lst[start] != lst[end]:
                return False

            start += 1
            end -= 1

        return True

# cool other solution
class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        lst = list(string)

        return lst == lst[::-1]
