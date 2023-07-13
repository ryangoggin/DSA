/*
There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order. x

Example 1:
Illustration of graph on LC
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.

Example 2:

Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
Output: [4]
Explanation:
Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
*/

/*
DFS (recursive)
1.) have a res array for safe nodes and visited POJO for status of visited nodes
2.) have a helper function that does DFS to check if nodes are safe
2a.) in the helper, pass the graph, the current node, and the visited POJO
2b.) if the node has already been visited (has a value of true in visited), return false
2c.) if the node is set to "safe" then return true
2d.) if the node hasn't been visited yet, set a key of the node to true
2e.) loop through the neighbors of the current node and return false if the neighbor isn't marked safe
2f.) otherwise, mark the passed in node "safe" and return true
3.) iterate over the graph
4.) if the result of the node passed into the helper is true, it is safe and its value is pushed into the res array
5.) return the res array after iterating
*/

var eventualSafeNodes = function(graph) {
    let res = [];
    let visited = {};

    for (let i = 0; i < graph.length; i++) {
        if (isSafe(graph, i, visited)) {
            res.push(i);
        }
    }
    return res;
};

function isSafe(graph, node, visited) {
    if (visited[node] === true) return false;
    if (visited[node] === "safe") return true;

    visited[node] = true;
    for (let neighbor of graph[node]) {
        if(!isSafe(graph, neighbor, visited)) return false;
    }
    visited[node] = "safe";
    return true;
}
