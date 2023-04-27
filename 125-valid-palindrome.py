
# phrase is palindrome if after converting upper case to lower case and removing non-alphanumeric chars,
# it reads the same forwards and backwards. includes letters and numbers



# 1.) stripping spaces from s
# 2.) convert to lowercase after stripping spaces
# 3.) check each character is first half of s with iteration
# 4.) check corresponding indices of s (i and ((-1 * i) - 1))
# 5.) do nothing if they match, return false if they don't
# 6.) return True if you get through the whole loop


class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        new_s = ""
        s = s.lower()

        for j in range(len(s)):
            if s[j].isalnum():
                new_s += s[j]

        for i in range(len(new_s)//2):
            if new_s[i] != new_s[(-1 * i) - 1]:
                return False

        return True
