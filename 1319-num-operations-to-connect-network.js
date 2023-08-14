/*
There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

Example 1:

Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

Example 2:


Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2
Example 3:

Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
Output: -1
Explanation: There are not enough cables.
*/

/*
1.) make an adjacency list for the network (it is bi-directional)
2.) make a visited array that starts off filled with false of length n
3.) fill the adjacency list by iterating over the connections array and making entries in each node's bucket
4.) next make a traverse helper that sets visited for the corresponding node passed in to true and traverses all its unvisited neighbors
5.) make a variable to count all the networks within the network as the result will be 1 less than this
6.) iterate for each node (0 to n) and traverse if the node isn't visited
7.) the network count should be done at this point so you can return 1 less than this value and that is the number of operations needed to connect the whole network
*/

var makeConnected = function(n, connections) {
    // not enough cables if n > length of connections
    if (n-1 > connections.length) return -1;

    // create adjacency list
    let neighbors = {};

    // track which are connected/visited
    let visited = Array(n).fill(false);

    for (let connection of connections) {
        let [first, second] = connection
        // bi-directional, needs 2 entries
        // first entry
        if (neighbors[first]) {
            neighbors[first].push(second);
        } else {
            neighbors[first] = [second];
        }
        // second entry
        if (neighbors[second]) {
            neighbors[second].push(first);
        } else {
            neighbors[second] = [first];
        }

    }

    // use to keep track of subnetworks in the network
    let networkCount = 0;

    // iterate over nodes in the network
    for (let node = 0; node < n; node++) {
        // if node isn't visited, traverse its subnetwork and increment the network count
        if (!visited[node]) {
            traverse(node);
            networkCount++;
        }
    }

    // number of operations required is one less than the amount of subnetworks there are (on connection connects 2 subnetworks)
    return networkCount - 1;

    function traverse(node) {
        // set the corresponding node to true
        visited[node] = true;

        // get the nodes neighbor nodes from the adjacency list if there's an entry
        if (neighbors[node]) {
            let neighborNodes = neighbors[node];

            // iterate over neighbor nodes and traverse them if they haven't been visited
            for (let neighborNode of neighborNodes) {
                if (!visited[neighborNode]) traverse(neighborNode);
            }
        }
    }
};
