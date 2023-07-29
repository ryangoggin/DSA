/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:

Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
*/

/*
1.) fill an array with all bst values through bfs
2.) sort the array of vals
3.) return the k-1 index of that array (kth smallest when 1 indexed)
*/

var kthSmallest = function(root, k) {
    let queue = [root];
    let vals = [];

    while (queue.length) {
        let queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            vals.push(queue[i].val);

            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        queue.splice(0, queueLen);
    }

    vals.sort((a, b) => a - b);

    return vals[k-1]
};
