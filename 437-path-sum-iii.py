# look at js file for thought process

# THIS IS SLOW
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        res = 0

        def pathSumCheck(root, targetSum):
            nonlocal res

            if not root:
                return

            targetSum -= root.val

            if targetSum == 0:
                res += 1

            pathSumCheck(root.left, targetSum)
            pathSumCheck(root.right, targetSum)

        def dfs(root, targetSum):
            if not root:
                return 0

            pathSumCheck(root, targetSum)
            dfs(root.left, targetSum)
            dfs(root.right, targetSum)

        dfs(root, targetSum)
        return res


# not my solution, but this is faster by using a hash map:
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def pathSum(self, root, sum):

        def dfs(sumHash, prefixSum, node):

            if not node:
                return 0

			# Sum of current path
            prefixSum += node.val

			# number of paths that ends at current node
            path = sumHash[prefixSum - sum]

			# add currentSum to prefixSum Hash
            sumHash[prefixSum] += 1

			# traverse left and right of tree
            path += dfs(sumHash, prefixSum, node.left) + dfs(sumHash, prefixSum, node.right)

		    # remove currentSum from prefixSum Hash
            sumHash[prefixSum] -= 1

            return path

        # depth first search, initialize sumHash with prefix sum of 0, occurring once
        return dfs(collections.defaultdict(int, {0: 1}), 0, root)
