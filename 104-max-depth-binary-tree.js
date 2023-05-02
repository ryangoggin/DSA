/*
given binary tree root, return max depth
*/

/*
1.) traverse the tree with DFS
2.) variables to track curr depth and max depth
3.) queue to hold nodes to visit, do this while the stack length > 0
4.) iterate over every node in the queue (each depth)
5a.) if the node in iteration has a left child, push into queue
5b.) if the node in iteration has a right child, push into queue
6.) use splice to remove the nodes from that depth from the queue
7.) return depth after traversal is done
*/

/*
PRACTICE TREES DUMB DUMB
*/

var maxDepth = function(root) {
    if(!root) return 0;

    let queue = [root];
    let depth = 0;

    while (queue.length > 0) {
        depth++;
        let queueLen = queue.length;

        for (let i=0; i < queueLen; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, queueLen);
    }
    return depth;
};


// // can do recursively as well
// var maxDepth = function(root) {
//     if(!root) return 0;
//     return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
// };
