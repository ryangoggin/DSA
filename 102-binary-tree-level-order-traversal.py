# see js file for reasoning

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        queue = [root]
        res = []

        while len(queue):
            queue_len = len(queue)
            level_arr = []

            for i in range(queue_len):
                level_arr.append(queue[i].val)
                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            res.append(level_arr)
            del queue[0:queue_len]

        return res
