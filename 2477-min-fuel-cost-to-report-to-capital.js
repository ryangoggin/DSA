/*
There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of n cities numbered from 0 to n - 1 and exactly n - 1 roads. The capital city is city 0. You are given a 2D integer array roads where roads[i] = [ai, bi] denotes that there exists a bidirectional road connecting cities ai and bi.

There is a meeting for the representatives of each city. The meeting is in the capital city.

There is a car in each city. You are given an integer seats that indicates the number of seats in each car.

A representative can use the car in their city to travel or change the car and ride with another representative. The cost of traveling between two cities is one liter of fuel.

Return the minimum number of liters of fuel to reach the capital city.

Example 1:

Input: roads = [[0,1],[0,2],[0,3]], seats = 5
Output: 3
Explanation:
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative2 goes directly to the capital with 1 liter of fuel.
- Representative3 goes directly to the capital with 1 liter of fuel.
It costs 3 liters of fuel at minimum.
It can be proven that 3 is the minimum number of liters of fuel needed.

Example 2:

Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2
Output: 7
Explanation:
- Representative2 goes directly to city 3 with 1 liter of fuel.
- Representative2 and representative3 go together to city 1 with 1 liter of fuel.
- Representative2 and representative3 go together to the capital with 1 liter of fuel.
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative5 goes directly to the capital with 1 liter of fuel.
- Representative6 goes directly to city 4 with 1 liter of fuel.
- Representative4 and representative6 go together to the capital with 1 liter of fuel.
It costs 7 liters of fuel at minimum.
It can be proven that 7 is the minimum number of liters of fuel needed.

Example 3:

Input: roads = [], seats = 1
Output: 0
Explanation: No representatives need to travel to the capital city.
*/

/*
1.) make the adjacency list w/ a Map
2.) start the res at 0
3.) make a dfs helper fxn
4.) pass the current and previous nodes to the helper as its parameters
5.) start people at 1 and neighbors as the array set to the current node in the adjacency list
6.) if there are neighbors, iterate over them
7.) if the neighbor isn't the previous node (don't want to go backwards), incrememnt people by  the dfs on that neighbor w/ current being passed in as the previous node
8.) if current node isn't at the capital yet, increment the res by the rounded up quotient of people and seats as that's how much fuel is needed for that portion so far, return the amount of people
9.) run the dfs helper on the start (0, -1)
10.) return the res
*/

var minimumFuelCost = function(roads, seats) {
    let graph = new Map();

    let res = 0;

    for (let road of roads) {
        let [node1, node2] = road;

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

    function dfs(curr, prev) {
        let people = 1;
        let neighbors = graph.get(curr);

        if (neighbors) {
            for (let neighbor of neighbors) {
                if (neighbor !== prev) {
                    people += dfs(neighbor, curr);
                }
            }
        }

        if (curr) res += Math.ceil(people/seats);

        return people;
    }

    dfs(0, -1);

    return res;
};
