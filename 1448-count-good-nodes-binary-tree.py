# see js file for thought process

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        counter = 0

        def traverse(node, max_val):
            if not node:
                return

            if node.val >= max_val:
                counter += 1

            max_val = max(max_val, node.val)
            traverse(node.left, max_val)
            traverse(node.right, max_val)

        traverse(root, root.val)
        return counter
