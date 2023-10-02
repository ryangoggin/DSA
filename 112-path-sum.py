# see js file for thought process

class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        res = False

        def traverse(currSum, node):
            nonlocal res

            if node is None:
                return
            else:
                currSum += node.val

                if currSum == targetSum and node.left is None and node.right is None:
                    res = True
                    return

                traverse(currSum, node.left)
                traverse(currSum, node.right)

        traverse(0, root)
        return res
