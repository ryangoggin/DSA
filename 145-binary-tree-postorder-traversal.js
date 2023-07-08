/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:

Input: root = []
Output: []

Example 3:

Input: root = [1]
Output: [1]
*/

/*
1.) do postorder traversal with a helper function that pushes values into the res array
2.) run the helper on root
3.) return the res array
*/

var postorderTraversal = function(root) {
    let res = [];

    function postorder(node) {
        if (!node) return;
        postorder(node.left);
        postorder(node.right);
        res.push(node.val);
    }

    postorder(root);

    return res;
};
