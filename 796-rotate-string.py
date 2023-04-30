# look at js file for reasoning

class Solution(object):
    def rotateString(self, s, goal):
        """
        :type s: str
        :type goal: str
        :rtype: bool
        """
        sLst = list(s)

        for char in sLst:
            shift = sLst[0]
            del sLst[0]
            sLst.append(shift)
            if "".join(sLst) == goal:
                return True

        return False
