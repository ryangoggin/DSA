# see js file for thought process
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        [node1, node2] = edges[0]
        [node3, node4] = edges[1]

        if node1 == node3 or node1 == node4:
            return node1
        else:
            return node2
