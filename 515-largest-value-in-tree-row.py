# Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

# Example 1:

# Input: root = [1,3,2,5,3,null,9]
# Output: [1,3,9]

# Example 2:

# Input: root = [1,2,3]
# Output: [1,3]

######################################################################33
# O(n) time complexity where n is # of nodes
# 0.) check if the root is None, return an empty list if it is
# 1.) make a res list and queue list and do level (breadth first) traversal
# 2.) put each levels vals into a list
# 3.) append the max of that list to the res array
# 4.) after traversal, return res

class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        res = []
        queue = [root]

        while len(queue) > 0:
            len_queue = len(queue)
            vals = []

            for i in range(len_queue):
                vals.append(queue[i].val)

                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            res.append(max(vals))
            del queue[0:len_queue]

        return res
