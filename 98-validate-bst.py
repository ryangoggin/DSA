# see js file for thought process

class Solution:
    def isValidBST(self, root: Optional[TreeNode], lower = float('-inf'), upper = float('inf')) -> bool:
        if not root:
            return True

        if root.val > lower and root.val < upper:
            return self.isValidBST(root.left, lower, root.val) and self.isValidBST(root.right, root.val, upper)
        else:
            return False
