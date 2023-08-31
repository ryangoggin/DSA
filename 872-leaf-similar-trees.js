/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

Example 2:

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
*/

/*
1.) store leaf values in 2 different arrays
2.) create 2 different dfs functions, 1 that stores leaf values in the first array and 1 that stores leaf values in the second array
3.) run each dfs on its respective root to populate the arrays
4.) if the arrays aren't the same length, return false as they aren't the same
5.) otherwise iterate over the indices and compare as you go, if any don't match return false
6.) return true if iteration completes
*/

var leafSimilar = function(root1, root2) {
    lvs1 = [];
    lvs2 = [];

    function dfs1(node) {
        if (!node.left && !node.right) lvs1.push(node.val);

        if (node.left) dfs1(node.left);
        if (node.right) dfs1(node.right);
    }

    function dfs2(node) {
        if (!node.left && !node.right) lvs2.push(node.val);

        if (node.left) dfs2(node.left);
        if (node.right) dfs2(node.right);
    }

    dfs1(root1);
    dfs2(root2);

    if (lvs1.length !== lvs2.length) return false;

    for (let i = 0; i < lvs1.length; i++) {
        if (lvs1[i] !== lvs2[i]) return false;
    }

    return true;
};
