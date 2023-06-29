/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

Input: root = [2,1,3]
Output: true

Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

/*
0.) return true if there is no root
1.) start with default params for lower and upper bounds at -Infinity and Infinity
2.) return the recursive call on the left node with same lower and passed in node's val as upper and the right node with passed in node's val as lower and same upper if the passed in node's value is between upper and lower bounds
3.) otherwise return false
*/

var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;

    if (lower < root.val && upper > root.val) {
        return isValidBST(root.left, lower, root.val) && isValidBST(root.right, root.val, upper);
    } else {
        return false;
    }
};
