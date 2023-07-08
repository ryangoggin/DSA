# see js file for thought process

class Solution:
    def postorder(self, node, res):
        if not node:
            return None
        self.postorder(node.left, res)
        self.postorder(node.right, res)
        res.append(node.val)

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        self.postorder(root, res)

        return res
