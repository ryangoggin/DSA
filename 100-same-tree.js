/*
given 2 trees, check if they are the same or not
*/

/*
1.) do a pre-order, in-order, or post-order traversal w/ iteration
2.) compare the values and return false if they don't match
3.) base case is both trees being null and returning true
*/

var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q) || (p.val !== q.val)) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
