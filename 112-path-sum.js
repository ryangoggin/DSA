/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Example 1:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

Example 2:

Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.

Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

/*
time - O(n) where n is the number of nodes in the tree
space - O(1)
DFS approach
1.) set a res variable to false
2.) create a traverse helper
2a.) the helper takes in the currSum and a node
2b.) if the passed in node is null, return
2c.) otherwise, add the node's value to the current sum
2d.) if the currentSum is the targetSum and the node is a leaf (no left or right), set the res to true and return
2e.) pass in the incremented currSum into recursive calls on the left and right children of the current node to furhter traverse
3.) run the helper starting with currSum at 0 and the root node
4.) return res as it will be true if there was a valid path and stay false if not
*/

var hasPathSum = function(root, targetSum) {
    let res = false;

    function traverse(currSum, node) {
        if (!node) {
            return;
        } else {
            currSum += node.val;

            if (currSum === targetSum && !node.left && !node.right) {
                res = true;
                return;
            };

            traverse(currSum, node.left);
            traverse(currSum, node.right);
        }
    }

    traverse(0, root);
    return res;
};
