/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

Example 1:

Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

Example 2:

Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.
*/

/*
DFS
1.) make a map for the graph's adjacency list and each possible node from each source (bi-directional)
2.) make a set for visited nodes
3.) fill the adjacency list by iterating over the edges
4.) destructure each edge into node1 and node2
4a.) if the adjacency list doesn't have the node, set that node to an array containing the other node
4b.) if the adjacency list does have the node, get that node and append the other node to the existing array
5.) make a dfs helper function to populate the visited set when doing dfs from source node
5a.) defined neighbors as the array in the adjacency list
5b.) if the neighbor hasn't been visited, recursively call the dfs function on it
6.) run the dfs function on the source node
7.) return whether visited has the destination node or not
*/

var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    let visited = new Set();

    for (let edge of edges) {
        let [node1, node2] = edge;

        if (!graph.has(node1)) {
            graph.set(node1, [node2]);
        } else {
            graph.get(node1).push(node2);
        }

        if (!graph.has(node2)) {
            graph.set(node2, [node1]);
        } else {
            graph.get(node2).push(node1);
        }
    }

    function dfs(node) {
        visited.add(node);

        let neighbors = graph.get(node);

        if (neighbors) {
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) dfs(neighbor);
            }
        }
    }

    dfs(source);

    return visited.has(destination);
};
