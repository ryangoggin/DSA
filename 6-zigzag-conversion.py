# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:
# string convert(string s, int numRows);

# Example 1:

# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"

# Example 2:

# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
# P     I    N
# A   L S  I G
# Y A   H R
# P     I

# Example 3:

# Input: s = "A", numRows = 1
# Output: "A"

##########################################################################

# O(n) - n is length of s
# 1.) if s is 1 char or les or if numRows is 1, return s
# 2.) create a rows dictionary to store which row a letter goes in lists
# 2a.) start row 1 w/ the first index of s in a list to avoid accidental direction change
# 3.) create an empty res list to concatenate each row's list after filling the dictionary
# 4.) start pointer at 1 as 0 is already in the dict
# 5.) set a direction inidicator to 'forward' to start
# 6.) set row_tracker to 2 as the first row was already taken care of to start
# 7.) set up a while loop that goes until pointer goes through all letters
# 8.) on the first forward, each row's key and list will need to be created, otherwise append the letter at point to its correspodning row key in the dict
# 9.) go forward w/ row_tracker incrementing until hitting numRows, then start decrementing and switch direction to 'backward'
# 10.) always incrememnt pointer
# 11.) once the rows are populated, convert to the dict's items and iterate over them --> concatenate each list to the res list
# 12.) return the res array joined together


class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if len(s) <= 1:
            return s

        if numRows == 1:
            return s

        rows = {
            1: [s[0]]
        }
        res = []

        pointer = 1
        direction = 'forward'
        row_tracker = 2

        while pointer < len(s):
            if direction == 'forward':
                if row_tracker in rows:
                    rows[row_tracker].append(s[pointer])

                    if row_tracker < numRows:
                        row_tracker += 1
                        pointer += 1
                        continue
                    else:
                        direction = "backward"
                        row_tracker -= 1
                        pointer += 1
                        continue
                else:
                    rows[row_tracker] = [s[pointer]]

                    if row_tracker < numRows:
                        row_tracker += 1
                        pointer += 1
                        continue
                    else:
                        direction = "backward"
                        row_tracker -= 1
                        pointer += 1
                        continue
            else:
                rows[row_tracker].append(s[pointer])

                if row_tracker > 1:
                    row_tracker -= 1
                    pointer += 1
                    continue
                else:
                    direction = "forward"
                    row_tracker += 1
                    pointer += 1
                    continue

        entries = list(rows.items())

        for entry in entries:
            res += entry[1]

        return "".join(res)
