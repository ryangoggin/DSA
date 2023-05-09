# look at js file for reasoning

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.max_path = 0

        def maxDepth(root):
            if root is None:
                return 0

            left_depth = maxDepth(root.left)
            right_depth = maxDepth(root.right)

            self.max_path = max(self.max_path, left_depth + right_depth)
            return max(left_depth, right_depth) + 1

        maxDepth(root)
        return self.max_path
