# Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

# Example 1:
# Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
# Output: 32
# Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

# Example 2:
# Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
# Output: 23
# Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

# time - O(n) where n is # of nodes in tree
# space - O(m) where m is the max # of nodes in two consecutive rows as that is the largets queue will get

# 1.) level first/BFT where node's with values between low and high get added to res
# 2.) return rest after the BFT

class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        res = 0
        queue = [root]

        while len(queue):
            queueLen = len(queue)

            for i in range(queueLen):
                node = queue[i]

                if low <= node.val <= high:
                    res += node.val

                if node.left:
                    queue.append(node.left)

                if node.right:
                    queue.append(node.right)

            del queue[0:queueLen]

        return res
