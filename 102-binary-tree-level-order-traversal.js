/*
given root of a binary tree, return the level traversal of its nodes' values (left to right, level by level)
*/

/*
0.) have a res array to put each levels' array into
1.) use a queue for BFT
2.) while queue has length, put each node's value into the array if that node exists
3.) return res after the whie loop
*/

// time: O(n) where n is the # of nodes in the tree

var levelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelArr = [];
        queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            levelArr.push(queue[i].val);
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        res.push(levelArr);
        queue.splice(0, queueLen);
    }

    return res;
};
