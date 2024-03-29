# Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

# Example 1:

# Input: root = [3,9,20,null,null,15,7]
# Output: [3.00000,14.50000,11.00000]
# Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
# Hence return [3, 14.5, 11].

# Example 2:

# Input: root = [3,9,20,15,7]
# Output: [3.00000,14.50000,11.00000]

########################################################################################################3

# 1.) level first search/traversal
# 2.) take avg of each and put into an array
# 3.) once traversal is done, return res array

class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        queue = [root]
        res = []

        while len(queue):
            tot = 0
            num_nodes = len(queue)

            for i in range(num_nodes):
                tot += queue[i].val

                if queue[i].left:
                    queue.append(queue[i].left)
                if queue[i].right:
                    queue.append(queue[i].right)

            avg = tot/num_nodes
            res.append(avg)

            del queue[0:num_nodes]

        return res
