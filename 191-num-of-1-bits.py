# see js file for thought process
# bin(int(n))[2:] gets the binary string conversion of n and trims off the "0b" at the start of the string

class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        n = bin(int(n))[2:]

        for i in range(len(n)):
            if n[i] == "1":
                count += 1

        return count
