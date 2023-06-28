# see js file for thought process

class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        queue = [{
            "node": root,
            "LorR": "node"
        }]
        res = 0

        while len(queue) > 0:
            queueLen = len(queue)

            for i in range(len(queue)):
                if not queue[i]["node"].left and not queue[i]["node"].right and queue[i]["LorR"] == "left":
                    res += queue[i]["node"].val

                if queue[i]["node"].left:
                    queue.append({
                        "node": queue[i]["node"].left,
                        "LorR": "left"
                    })

                if queue[i]["node"].right:
                    queue.append({
                        "node": queue[i]["node"].right,
                        "LorR": "right"
                    })

            del queue[0:queueLen]

        return res
