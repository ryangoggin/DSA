# see thought process in js file

class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False

        if s == goal:
            return len(s) != len(set(s))

        diff_idxs = []

        for i in range(len(s)):
            if s[i] != goal[i]:
                diff_idxs.append(i)

            if len(diff_idxs) > 2:
                return False

        if len(diff_idxs) < 2:
            return False

        [first_diff, second_diff] = diff_idxs

        return s[first_diff] == goal[second_diff] and s[second_diff] == goal[first_diff]
