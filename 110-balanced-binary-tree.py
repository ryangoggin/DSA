# return true if subtree heights are within 1 of each other, false if not

# will want to solve recursively:
# 0.) return boolean for if helper checkHeight is not greate than or equal to 0 (only returns otherwise when not balanced)
# 1.) base case: root passed in is None, return 0
# 2.) left and right heights are recursive calls on the respective children nodes of root
# 3.) if left or right height are negative or the diff between subtree heights are greater than 1, return -1
# 4.) return max of left and right height incrememnted by 1


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return (self.Height(root) >= 0)

    def Height(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return 0

        left_height = self.Height(root.left)
        right_height = self.Height(root.right)

        if left_height < 0 or right_height < 0 or abs(left_height - right_height) > 1:
            return -1
        return max(left_height, right_height) + 1
