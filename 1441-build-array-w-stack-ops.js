// see py file for thought process

var buildArray = function(target, n) {
    let res = [];
    let curr = 0;

    for (let i = 1; i <= n; i++) {
        if (i === target[curr]) {
            res.push("Push");
            curr++;
        } else {
            res.push("Push");
            res.push("Pop");
        }

        if (curr >= target.length) break;
    }

    return res;
};
