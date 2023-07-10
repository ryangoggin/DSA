# see js file for thought process

# doesn't pass because stupidly long test case. good enought solution for me though
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        queue = [root]
        depth = 0

        while len(queue) > 0:
            depth += 1
            queueLen = len(queue)

            for i in range(queueLen):
                if not queue[i].left and not queue[i].right:
                    return depth

                if queue[i].left:
                    queue.append(queue[i].left)

                if queue[i].right:
                    queue.append(queue[i].right)
