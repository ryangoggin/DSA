class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        res = 0

        num_string = str(num)
        first = 0
        last = k

        while last <= len(num_string):
            subnum = num_string[first:last]
            subnum_list = list(subnum)

            while len(subnum_list) > 0:
                if subnum_list[0] == "0":
                    del subnum_list[0]
                else:
                    break

            subnum = "".join(subnum_list)

            if len(subnum) > 0:
                if num%int(subnum) == 0:
                    res += 1

            first += 1
            last += 1

        return res
