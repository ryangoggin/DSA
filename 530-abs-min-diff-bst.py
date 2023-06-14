# looks at js file for thought process

class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        vals = []
        self.dfs(root, vals)
        min_diff = float('inf')

        for i in range(len(vals)):
            if i < len(vals) - 1:
                curr_diff = vals[i+ 1] - vals[i]
                min_diff = min(min_diff, curr_diff)
        return min_diff

    def dfs(self, root, vals):
        if not root:
            return
        else:
            self.dfs(root.left, vals)
            vals.append(root.val)
            self.dfs(root.right, vals)
