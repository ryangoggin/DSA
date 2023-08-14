/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
*/

/*
0.) this will be recursive, base case is if there is no root or root is p or root is q --> return root
1.) do a dfs by defining left and right res as recursive calls on the left and right subtrees
2.) return once left and right res are... if both are present, their lowest common ancestor is the root.. if only one is present, that is the lowest common ancestor
*/

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;

    let leftRes = lowestCommonAncestor(root.left, p, q);
    let rightRes = lowestCommonAncestor(root.right, p, q);

    return (leftRes && rightRes) ? root : (leftRes || rightRes);
};
