# see js for reasoning

# DFS
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        def isSameTree(p, q):
            if not p and not q:
                return True
            if (not p and q) or (p and not q) or (p.val != q.val):
                return False

            return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)

        def dfs(node):
            if not node:
                return False
            if isSameTree(node, subRoot):
                return True
            return dfs(node.left) or dfs(node.right)

        return dfs(root)


# BFS
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        def isSameTree(p, q):
            if not p and not q:
                return True
            if (not p and q) or (p and not q) or (p.val != q.val):
                return False

            return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)

        queue = [root]

        while len(queue):
            curr = queue.pop(-1)
            if not curr:
               continue
            if isSameTree(curr, subRoot):
                return True
            queue.append(curr.left)
            queue.append(curr.right)


        return False
