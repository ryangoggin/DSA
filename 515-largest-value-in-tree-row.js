// see thought process in py file

var largestValues = function(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];

    while (queue.length) {
        let vals = [];
        let queueLen = queue.length;

        for (let i=0; i < queueLen; i++) {
            vals.push(queue[i].val);

            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }

        res.push(Math.max(...vals));
        queue.splice(0, queueLen);
    }

    return res;
};
