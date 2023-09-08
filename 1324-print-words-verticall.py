# Given a string s. Return all the words vertically in the same order in which they appear in s.
# Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
# Each word would be put on only one column and that in one column there will be only one word.

# Example 1:

# Input: s = "HOW ARE YOU"
# Output: ["HAY","ORO","WEU"]
# Explanation: Each word is printed vertically.
#  "HAY"
#  "ORO"
#  "WEU"

# Example 2:

# Input: s = "TO BE OR NOT TO BE"
# Output: ["TBONTB","OEROOE","   T"]
# Explanation: Trailing spaces is not allowed.
# "TBONTB"
# "OEROOE"
# "   T"

# Example 3:

# Input: s = "CONTEST IS COMING"
# Output: ["CIC","OSO","N M","T I","E N","S G","T"]

############################################################################################

# O(m*n) where m is the number of words and n is the max length of those words
# 1.) make a dictionary to hold the letters for each row
# 2.) split the s string into its words in a list
# 3.) start res as an empty list
# 4.) start the max length variable at 0
# 5.) get the max length of a word in words by iterate over words and updating max length as it iterates
# 6.) next iterate over the words again, and nest an iteration over the max length as this is how many "rows" there will be in the dict
# 7.) if the current char is in rows dict already, just concatenate it to the corresponding row
# 8.) otherwise create a new key for that row and set it to that char
# 9.) in both cases make a case where i is past the current words length and concatenate a space or start it as a space for the corresponding row in rows
# 10.) iterate over the keys in rows to get each "vertical" word
# 11.) trailing spaces aren't allowed so check if a words last letter is a space
# 11a.) if it is, split that word into a list, iterate from the back, delete spaces, break the loop once a letter is hit
# 11b.) rejoin the list together and append it to res
# 12.) if no trailing spaces, append the word as is to res
# 13.) after iterating res can be returned


class Solution:
    def printVertically(self, s: str) -> List[str]:
        rows = {}
        words = s.split()

        res = []
        max_len = 0

        for word in words:
            max_len = max(max_len, len(word))

        for word in words:
            for i in range(max_len):
                if i not in rows:
                    if i < len(word):
                        rows[i] = word[i]
                    else:
                        rows[i] = " "
                else:
                    if i < len(word):
                        rows[i] += word[i]
                    else:
                        rows[i] += " "

        for key in rows:
            if rows[key][-1] == " ":
                row_list = list(rows[key])

                for i in range(len(row_list) - 1, -1, -1):
                    if row_list[i] == " ":
                        del row_list[i]
                    else:
                        break
                new_row = "".join(row_list)
                res.append(new_row)
            else:
                res.append(rows[key])

        return res
