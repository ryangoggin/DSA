# js file has thought process

class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        def dfsDel(node):
            if not node:
                return node

            if node.val == key:
                if not node.left:
                    return node.right
                if not node.right:
                    return node.left

                curr = node.right
                while curr.left:
                    curr = curr.left
                curr.left = node.left

                return node.right

            if node.val > key:
                node.left = dfsDel(node.left)
            else:
                node.right = dfsDel(node.right)

            return node

        return dfsDel(root)
