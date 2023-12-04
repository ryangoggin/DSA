/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/*
typical island approach:
1.) helper function to go across whole island once a 1 is detected when iterating over grid
2.) increment a count for each island once an island is detected
3.) have the helper convert all the 1s of the island to 0s so they aren't detected again
4.) return the number of islands
*/

var numIslands = function(grid) {
    let numIslands = 0;
    let m = grid.length;
    let n = grid[0].length;

    // iterate over each cell of the matrix
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            // "sink" the island (convert island to 0s) and increment numIslands
            if (grid[row][col] === "1") {
                numIslands++;
                sinkIsland(row, col);
            }
        }
    }

    function sinkIsland(row, col) {
        // convert to 0s to avoid same island being detected multiple times
        grid[row][col] = "0";

        // up
        if (row-1 >= 0) {
            if (grid[row-1][col] === "1") {
                sinkIsland(row-1, col);
            }
        }

        // down
        if (row+1 < m) {
            if (grid[row+1][col] === "1") {
                sinkIsland(row+1, col);
            }
        }

        // left
        if (col-1 >= 0) {
            if (grid[row][col-1] === "1") {
                sinkIsland(row, col-1);
            }
        }

        // right
        if (col+1 < n) {
            if (grid[row][col+1] === "1") {
                sinkIsland(row, col+1);
            }
        }
    }

    return numIslands;
};


var numIslands = function(grid) {
    let res = 0;
    let m = grid.length;
    let n = grid[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === "1") {
                res++;
                sinkIsland(row, col);
            }
        }
    }

    function sinkIsland(row, col) {
        grid[row][col] = "0";

        // up
        if (row > 0) {
            if (grid[row-1][col] === "1") {
                sinkIsland(row-1, col);
            }
        }

        // right
        if (col < n-1) {
            if (grid[row][col+1] === "1") {
                sinkIsland(row, col+1);
            }
        }

        // down
        if (row < m-1) {
            if (grid[row+1][col] === "1") {
                sinkIsland(row+1, col);
            }
        }

        // left
        if (col > 0) {
            if (grid[row][col-1] === "1") {
                sinkIsland(row, col-1);
            }
        }
    }

    return res;
};
