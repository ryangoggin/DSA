/*
return true or false if a binary tree is height balanced (its two subtrees' heights never differ by more than 1)
*/

/*
will want to solve recursively:
1.) base case: root passed in is null, return true
2.) set res to true at the beginning, set to false once imbalance happens
3.) recursive helper function to check subtree height difference and return the tree height:
3a.) if both left and right are null, return 0 for the height w/o changing res to false as it is balanced
3b.) call the function on the left and right nodes of root if they exist, and add 1 to incrememnt that subtree's height
3c.) if the difference between the subtree heights is greater than 1, set res to false
4c.) return the greater of the two subtree heights
4.) call the helper function on root, this will change res to true or false
5.) return res (will be true if balanced, false if not)
*/

var isBalanced = function(root) {
    if (!root) return true;

    let res = true;

    const heightCheck = function(root) {
        if (!root.left && !root.right) return 0;

        let leftHeight = 0;
        let rightHeight = 0;

        if (root.left) {
            leftHeight = 1 + heightCheck(root.left);
        }
        if (root.right) {
            rightHeight = 1 + heightCheck(root.right);
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            res = false;
        }

        return Math.max(leftHeight, rightHeight);
    }

    heightCheck(root);

    return res;
};
