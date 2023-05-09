// return the length of the longest path in a binary tree (doesn't need to go through root)

/*
use a helper function recursively to get depths
1.) initialize the maxPath at 0
2.) create the helper function that takes in a root node
3.) if this node is null, return 0 as it has no depth
4.) set variables to the recursive calls on the left and right children nodes of root
5.) set maxPath to the max between itself and the sum of left and right depths
6.) return the max between the left and right depth, add 1 for the root passed in
7.) outside the helper function, call the helper function on root
8.) return the maxPath resulting from the helper
*/

var diameterOfBinaryTree = function(root) {
    let maxPath = 0;

    function maxDepth(root) {
        if (!root) return 0;

        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);

        maxPath = Math.max(maxPath, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }

    maxDepth(root);
    return maxPath;
};
