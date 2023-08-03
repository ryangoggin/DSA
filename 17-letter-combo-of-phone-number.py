# see js file for thought process

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        numberMapping = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        res = []

        def comboMaker(digits, currCombo):
            if digits == "":
                if currCombo == "":
                    return
                else:
                    res.append(currCombo)
                    return

            firstLetters = numberMapping[digits[0]]

            for i in range(len(firstLetters)):
                currCombo += firstLetters[i]
                comboMaker(digits[1:], currCombo)
                currCombo = currCombo[0:len(currCombo)-1]

        comboMaker(digits, "")
        return res
