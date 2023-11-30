// see py file for thought process

var findSmallestSetOfVertices = function(n, edges) {
    let res = [];
    let indegree = new Array(n).fill(0);

    for (let edge of edges) {
        indegree[edge[1]]++;
    }

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) res.push(i);
    }

    return res;
};
