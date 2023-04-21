# given 2 strings word1 and word2
# return them merged alternating starting with word 1

# edge cases: no word1 or no word2 (len == 0), just return the other word
# otherwise start with an empty string
# iterate over the longer of the 2 words
# if current index is less than len of the shorter word concat i index of word1 then word2 to res
# return res

# Complete the 'merge_alt' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING word1
#  2. STRING word2
#

def merge_alt(word1, word2):
    # Write your code here
    if len(word1) == 0:
        return word2
    if len(word2) == 0:
        return word1

    res = ""

    if len(word1) >= len(word2):
        for i in range(len(word1)):
            res += word1[i]
            if i < len(word2):
                res += word2[i]

    if len(word2) > len(word1):
        for i in range(len(word2)):
            if i < len(word1):
                res += word1[i]
            res += word2[i]

    return res
