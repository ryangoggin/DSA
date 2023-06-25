/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

Example 1:

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
*/

/*
1.) if node is null, return null
2.) if node is less than current, call fxn on node.right
3.) if node is greater than current, call fxn on node.left
*/

var searchBST = function(root, val) {
    if (!root) return null;

    if (root.val === val) return root;

    if (root.val > val) return searchBST(root.left, val);

    if (root.val < val) return searchBST(root.right, val);
};
