// see py file for thought process

var findBottomLeftValue = function(root) {
    let levels = [];
    let queue = [root];

    while (queue.length > 0) {
        let queueLen = queue.length;
        let level = [];

        for (let i = 0; i < queueLen; i++) {
            level.push(queue[i].val);

            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        levels.push(level);
        queue.splice(0, queueLen);
    }

    return levels[levels.length - 1][0];
};
