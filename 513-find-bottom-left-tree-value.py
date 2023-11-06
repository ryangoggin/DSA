# Given the root of a binary tree, return the leftmost value in the last row of the tree.

# Example 1:

# Input: root = [2,1,3]
# Output: 1

# Example 2:

# Input: root = [1,2,3,4,null,5,6,null,null,7]
# Output: 7

# time O(n), space O(n) - n is # nodes in tree
# 1.) create an array to hold each level's values
# 2.) level first traversal and populate an array with that levels values and put into the levels array
# 3.) after traversal, return the first value of the last level array as this is the tree's bottom left value


class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        levels = []

        queue = [root]

        while len(queue) > 0:
            queueLen = len(queue)
            level = []

            for i in range(queueLen):
                level.append(queue[i].val)

                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            levels.append(level)
            del queue[0:queueLen]

        return levels[-1][0]
