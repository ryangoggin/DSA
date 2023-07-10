/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

/*
1.) perform bfs as usual w/ depth tracking
2.) return the depth once you hit a leaf
*/

var minDepth = function(root) {
    if (!root) return 0;

    let queue = [root];
    let depth = 0;

    while (queue.length > 0) {
        depth++;
        let queueLen = queue.length;

        for (let i=0; i < queueLen; i++) {
            if (!queue[i].left && !queue[i].right) {
                return depth;
            }

            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, queueLen);
    }
};
