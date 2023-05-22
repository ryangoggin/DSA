/*
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Example 2:
Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

Example 3:
Input: root = [1]
Output: 1
Explanation: Root is considered as good.
*/

/*
0.) start a counter at 0
1.) use a recursive helper to traverse the tree that takes a node and a max value to check against as parameters
2.) base case is if there isn't a node, just return out of the function
3.) if the node's value is greater than or equal to the passed in max, increment counter
4.) update the max with the Math.max function
5.) call the function on the left and right children of the node with the updated max
6.) call the helper on the root and its value
7.) return the counter
*/

var goodNodes = function(root) {
    let counter = 0;

    const traverse = function(node, max) {
        if (!node) return;

        if (node.val >= max) counter++;

        max = Math.max(max, node.val);
        traverse(node.left, max);
        traverse(node.right, max);
    }

    traverse(root, root.val);
    return counter;
};

/*
THIS IS WRONG
initial thought... only works for given examples... fails 53/63 test cases...
needs to have a max included with each node
1.) check if there's a node, return 0 if not
2.) otherwise do a BFS and start a counter at 1 for the node
3a.) check if there is a left, if there is one check if it is less than or equal to the node
3b.) if it is less than or equal to parent, add to the queue and increment the counter, if not don't just add the node to the queue w/o incrementing the counter
4.) repeat 3 for the right nodes
5.) return the counter after the BFS finishes
*/

/*
var incorrectGoodNodes = function(root) {
    if (!root) return 0;

    let queue = [root];
    let counter = 1;

    while (queue.length) {
        let queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            let curr = queue[i];
            if (curr.left) {
                if (curr.left.val >= curr.val) {
                    queue.push(curr.left);
                    counter++;
                } else {
                    queue.push(curr.left);
                }
            }
            if (curr.right) {
                if (curr.right.val >= curr.val) {
                    queue.push(curr.right);
                    counter++;
                } else {
                    queue.push(curr.right);
                }
            }
        }
        queue.splice(0, queueLen);
    }

    return counter;
};*/
