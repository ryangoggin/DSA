# see js file for thought process

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        queue = [root]

        if not root:
            return res

        while (len(queue)):
            queue_len = len(queue)
            right_val = queue[-1].val
            res.append(right_val)

            for i in range(queue_len):
                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            del queue[0:queue_len]

        return res
