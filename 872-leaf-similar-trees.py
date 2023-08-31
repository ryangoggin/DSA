# see js file for thought process

class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        lvs1 = []
        lvs2 = []

        def dfs1(node):
            if not node.left and not node.right:
                lvs1.append(node.val)

            if node.left:
                dfs1(node.left)
            if node.right:
                dfs1(node.right)

        def dfs2(node):
            if not node.left and not node.right:
                lvs2.append(node.val)

            if node.left:
                dfs2(node.left)
            if node.right:
                dfs2(node.right)

        dfs1(root1)
        dfs2(root2)

        if len(lvs1) != len(lvs2):
            return False

        for i in range(len(lvs1)):
            if lvs1[i] != lvs2[i]:
                return False

        return True
