# look at js file for thought process

# THIS IS SLOW
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        res = 0

        def pathSumCheck(root, targetSum):
            nonlocal res

            if not root:
                return

            targetSum -= root.val

            if targetSum == 0:
                res += 1

            pathSumCheck(root.left, targetSum)
            pathSumCheck(root.right, targetSum)

        def dfs(root, targetSum):
            if not root:
                return 0

            pathSumCheck(root, targetSum)
            dfs(root.left, targetSum)
            dfs(root.right, targetSum)

        dfs(root, targetSum)
        return res
