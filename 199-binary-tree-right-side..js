/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
*/

/*
1.) if root is null, return []
2.) otherwise start a BFS with queue = [root] and a res array
3.) for each level of the BFS, push the val of the last element in the queue into res
4.) return res after finishing the BFS
*/

var rightSideView = function(root) {
    let queue = [root];
    let res = [];

    if (!root) return res;

    while (queue.length) {
        let queueLen = queue.length;

        let rightVal = queue[queueLen - 1].val;
        res.push(rightVal);

        for (let i = 0; i < queueLen; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        queue.splice(0, queueLen);
    }

    return res;
};
