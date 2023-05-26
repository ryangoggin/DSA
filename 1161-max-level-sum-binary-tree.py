# see js for thought process

class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        queue = [root]
        max_sum = float('-inf')
        curr_level = 1
        max_level = 1

        while len(queue) > 0:
            queue_len = len(queue)

            val_queue = map(lambda x: x.val, queue)
            level_sum = sum(val_queue)

            if level_sum > max_sum:
                max_sum = level_sum
                max_level = curr_level

            for i in range(queue_len):
                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            del queue[0:queue_len]
            curr_level += 1

        return max_level
