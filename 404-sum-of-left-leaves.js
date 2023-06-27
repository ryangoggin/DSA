/*
Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

Example 2:

Input: root = [1]
Output: 0
*/

/*
0.) if no root, return 0
1.) inialize res to 0, BFS with a queue
2.) instead of storing just the node, store a POJO with a node and left or right key to know whether the node is a left or right child
3.) if the current node in the queue is a leaf and the left or right key's value is left, add the node's value to res
*/

var sumOfLeftLeaves = function(root) {
    if (!root) return 0;

    let res = 0;
    let queue = [{
        node: root,
        LorR: "root"
    }];

    while (queue.length > 0) {
        let queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            if (!queue[i].node.left && !queue[i].node.right && queue[i].LorR === "left") res += queue[i].node.val;

            if (queue[i].node.left) {
                queue.push({
                    node: queue[i].node.left,
                    LorR: "left"
                });
            }
            if (queue[i].node.right) {
                queue.push({
                    node: queue[i].node.right,
                    LorR: "right"
                });
            }
        }

        queue.splice(0, queueLen);
    }

    return res;
};
