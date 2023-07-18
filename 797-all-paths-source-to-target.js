/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Example 1:

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Example 2:

Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
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
