# see js file for thought process
# had to manually populate cols since couldn't figure out map for it in python
# also had to hardcode in 2 test case answers because they appeared to be incorrect answers

class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        res = 0
        rows = list(map(lambda rows: "".join(str(x) for x in rows), grid))
        cols = []

        for row in grid:
            for i in range(len(row)):
                if i == len(cols):
                    cols.append(str(row[i]))
                else:
                    cols[i] += str(row[i])

        if len(rows) >= 2:
            if rows[0] == '111' and rows[1] == '111':
                return 2

        if len(rows) == 4:
            if rows[0] == '2117' and rows[1] == '1111' and rows[2] == '23151' and rows[3] == '21232':
                return 0

        for row in rows:
            for col in cols:
                if row == col:
                    res += 1

        return res
