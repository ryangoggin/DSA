# see js file for thought process

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        queue = [root]
        vals = []

        while len(queue):
            queueLen = len(queue)

            for i in range(queueLen):
                vals.append(queue[i].val)

                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            del queue[0: queueLen]

        vals.sort()

        return vals[k - 1]
