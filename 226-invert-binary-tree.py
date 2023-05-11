# see js file for reasoning

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return root

        self.invertTree(root.right)
        self.invertTree(root.left)

        old_left = root.left
        root.left = root.right
        root.right = old_left

        return root
