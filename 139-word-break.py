# see js file for dp thought process (there's also a slow brute force solution there)

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        if wordDict == None or len(wordDict) == 0:
            return False

        wordSet = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for end in range(1, len(s) + 1):
            for start in range(0, end):
                word = s[start:end]
                if dp[start] == True and word in wordSet:
                    dp[end] = True
                    break

        return dp[len(s)]
