# see js file for thought process

class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        res = []

        topRow = set(["q","Q","w","W","e","E","r","R","t","T","y","Y","u","U","i","I","o","O","p","P"])
        midRow = set(["a","A","s","S","d","D","f","F","g","G","h","H","j","J","k","K","l","L"])
        botRow = set(["z","Z","x","X","c","C","v","V","b","B","n","N","m","M"])

        def oneRow(word):
            chars = list(word)

            if chars[0] in topRow:
                row = topRow
            elif chars[0] in midRow:
                row = midRow
            else:
                row = botRow

            for i in range(1, len(chars)):
                if not chars[i] in row:
                    return False

            return True

        for word in words:
            if oneRow(word):
                res.append(word)

        return res
