# Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
# the smallest in lexicographical order
#  among all possible results.

# Example 1:

# Input: s = "bcabc"
# Output: "abc"

# Example 2:

# Input: s = "cbacdcbc"
# Output: "acdb"

####################################################################################################
# 1.) have a dict to track the last index of each letter
# 2.) have a set to track what letters have been seen already
# 3.) have a list be a stack to get the order of removal correct
# 4.) itearte over s to populate the last occurrence dict
# 5.) iterate over s again, if the current letter is in the seen set, continue to the next letter in s
# 6.) otherwise, while there are letters in the stack, the stack's last element is lexicographically after the current letter, and the last occurrence of the last stack element is after the current index,
# 6(cont.) .) pop off the last letter of the stack and remove it from the seen set
# 7.) outside the while loop, add that current letter to seen and append it to the stack
# 8.) after the outer for loop completes, rejoin the stack and return it

class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        last_occurrence = {}
        seen = set()
        stack = []

        for  i in range(len(s)):
            last_occurrence[s[i]] = i

        for i in range(len(s)):
            if s[i] in seen:
                continue
            else:
                while stack and stack[-1] > s[i] and last_occurrence[stack[-1]] > i:
                    removed = stack.pop()
                    seen.remove(removed)
                seen.add(s[i])
                stack.append(s[i])

        return "".join(stack)
