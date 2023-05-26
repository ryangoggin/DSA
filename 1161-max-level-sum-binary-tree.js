/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:

Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
*/

/*
1.) initialize max sum at negative infinity, and initialize level to 1
2.) BFS with a queue and increment level each loop, use if statement to update max and level if there's a new max at that level
3.) return max level
*/

// time: O(n), n is # of nodes in tree
// space: O(n), n is # of nodes in a level

var maxLevelSum = function(root) {
    if (!root) return 0;

    let queue = [root];
    let max = -Infinity;
    let maxLevel = 1;
    let currLevel = 1;

    while (queue.length > 0) {
        let queueLen = queue.length;

        let levelSum = queue.reduce(function(sum, ele){
            return sum + ele.val;
        }, 0);

        if (levelSum > max) {
            max = levelSum;
            maxLevel = currLevel;
        }

        for (let i = 0; i < queueLen; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        queue.splice(0, queueLen);
        currLevel++;
    }

    return maxLevel;
};
