# see js file for thought process


class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        res = {}

        def dfs(node):
            if not node:
                return node

            if node.val in res:
                return res[node.val]

            else:
                res[node.val] = Node(val=node.val, neighbors=[])

                for neighbor in node.neighbors:
                    res[node.val].neighbors.append(dfs(neighbor))

                return res[node.val]

        return dfs(node)
