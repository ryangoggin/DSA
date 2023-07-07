# see js file for thought process

class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        start = 0
        end = 0

        num_T = 0
        num_F = 0

        max_T_or_F = 0

        def overK():
            return num_T > k and num_F > k

        while end < len(answerKey):
            if answerKey[end] == "T":
                num_T += 1
            if answerKey[end] == "F":
                num_F += 1

            while overK():
                if answerKey[start] == "T":
                    num_T -= 1
                if answerKey[start] == "F":
                    num_F -= 1
                start += 1

            max_T_or_F = max(max_T_or_F, end - start + 1)
            end += 1

        return max_T_or_F
