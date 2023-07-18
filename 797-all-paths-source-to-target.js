/*

*/

/*
1.) start a res array to hold all the paths
2.) make a dfs helper that takes the current node and current path as parameters
3.) if the last element of the current path is n-1, push the path into res and return
4.) otherwise iterate through the current node's neighbors
5.) recursively call dfs on those and add that neighbor node to the end of the path
6.) run the dfs helper starting from 0 with a path starting at 0
7.) return res after the dfs helper populates it
*/

var allPathsSourceTarget = function(graph) {
    let res = [];

    dfs(0, [0]);
    return res;

    function dfs(curr, path) {
        if (path[path.length - 1] === graph.length - 1) {
            res.push(path);
            return
        }
        for (let i = 0; i < graph[curr].length; i++) {
            dfs(graph[curr][i], [...path, graph[curr][i]]);
        }
    }
};
