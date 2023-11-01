# see js file for thought process

class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        freq = {}

        queue = [root]

        while len(queue) > 0:
            queueLen = len(queue)

            for i in range(queueLen):
                if queue[i].val not in freq:
                    freq[queue[i].val] = 1
                else:
                    freq[queue[i].val] += 1

            queue = [node.left for node in queue if node.left] + [node.right for node in queue if node.right]

        entries = list(freq.items())
        entries.sort(key = lambda x: x[1], reverse = True)

        mode = entries[0][1]
        for entry in entries:
            if entry[1] == mode:
                res.append(entry[0])
            else:
                break

        return res
