# see js file for thought process

class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        tilt = { "val": 0 }

        def dfs(node, tilt):
            if node is None:
                return 0

            left = dfs(node.left, tilt)
            right = dfs(node.right, tilt)
            tilt["val"] += abs(left - right)

            return node.val + left + right

        dfs(root, tilt)
        return tilt["val"]
