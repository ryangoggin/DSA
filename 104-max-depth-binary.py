# look at js file for reasoning

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0

        queue = [root]
        depth = 0

        while len(queue) > 0:
            depth += 1
            queue_len = len(queue)
            for i in range(len(queue)):
                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)
            del queue[0: queue_len]

        return depth
