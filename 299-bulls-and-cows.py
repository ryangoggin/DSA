# see js file for thought process

class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        numMap = {}
        bulls = 0
        cows = 0

        for i in range(10):
            numMap[i] = 0

        for i in range(len(secret)):
            if secret[i] == guess[i]:
                bulls += 1

            else:
                numMap[int(secret[i])] += 1
                if numMap[int(secret[i])] <= 0:
                    cows += 1
                numMap[int(guess[i])] -= 1
                if numMap[int(guess[i])] >= 0:
                    cows += 1

        return str(bulls) + "A" + str(cows) + "B"
