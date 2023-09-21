# see js file for thought process

class Solution:
    def toLowerCase(self, s: str) -> str:
        lowercaseConv = {
            'A': 'a',
            'B': 'b',
            'C': 'c',
            'D': 'd',
            'E': 'e',
            'F': 'f',
            'G': 'g',
            'H': 'h',
            'I': 'i',
            'J': 'j',
            'K': 'k',
            'L': 'l',
            'M': 'm',
            'N': 'n',
            'O': 'o',
            'P': 'p',
            'Q': 'q',
            'R': 'r',
            'S': 's',
            'T': 't',
            'U': 'u',
            'V': 'v',
            'W': 'w',
            "X": 'x',
            'Y': 'y',
            'Z': 'z'
        }

        sList = list(s)

        for i in range(len(sList)):
            if sList[i] in lowercaseConv:
                sList[i] = lowercaseConv[sList[i]]

        return "".join(sList)
