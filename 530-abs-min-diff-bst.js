/*
Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:


Input: root = [4,2,6,1,3]
Output: 1

Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
*/

/*
REALLY SLOW O(n) where n is # of nodes in BST
1.) do a depth first traversal and populate an array with all the values (should be in ascending order)
2.) once there's an array of all values, iterate over it and take each difference
3.) compare the current diff with min diff and replace min diff with the smaller of the two
4.) return min at end of loop
*/

var getMinimumDifference = function(root) {
    let vals = [];
    let minDiff = Infinity;

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        vals.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    console.log(vals);

    for (let i = 0; i < vals.length; i++) {
        if (i < vals.length - 1) {
            let currDiff = vals[i + 1] - vals[i];
            minDiff = Math.min(minDiff, currDiff);
        }
    }

    return minDiff
};
