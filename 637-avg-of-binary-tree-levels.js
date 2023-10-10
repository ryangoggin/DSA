// see py file for thought process

var averageOfLevels = function(root) {
    let queue = [root];
    let res = [];

    while(queue.length) {
        let tot = 0;
        let numNodes = queue.length;

        for (let i = 0; i < numNodes; i++) {
            tot += queue[i].val;

            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        let avg = tot/numNodes;
        res.push(avg);

        queue.splice(0, numNodes);
    }

    return res;
};
