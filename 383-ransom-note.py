# see js file for thought process

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine):
            return False

        hashmap = {}

        for i in range(len(magazine)):
            if magazine[i] in hashmap:
                hashmap[magazine[i]] += 1
            else:
                hashmap[magazine[i]] = 1

        for i in range(len(ransomNote)):
            if ransomNote[i] not in hashmap:
                return False
            elif hashmap[ransomNote[i]] < 1:
                return False
            else:
                hashmap[ransomNote[i]] -= 1

        return True
