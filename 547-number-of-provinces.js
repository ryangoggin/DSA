/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

/*
1.) make a set for visited cities
2.) set res (# of provinces) to 0
3.) have a dfs helper function (each dfs on unvisited cities will be for a whole province)
3a.) if the city hasn't been visited yet and is a 1, add it to the visited set and recursively call dfs on it
4.) if the city of the row in the matrix hasn't been visited yet, call the dfs helper on it to get its province in visited and incrememnt res
5.) return res after iteration completes
*/

var findCircleNum = function(isConnected) {
    let visited = new Set();

    let res = 0;

    for (let row = 0; row < isConnected.length; row++) {
        if (!visited.has(row)) {
            dfs(row);
            res++;
        }
    }

    return res;

    function dfs(row) {
        for (let col = 0; col < isConnected[0].length; col++) {
            if (!visited.has(col) && isConnected[row][col] === 1) {
                visited.add(col);
                dfs(col);
            }
        }
    }
};
