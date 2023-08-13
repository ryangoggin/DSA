/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:

Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/

/*
time complexity: O(m x n) where m and n are dimensions of the matrix
space complexity: O(1), only store values in currArea and maxArea

0.) set m to length of grid, n to length of first row of grid, currArea to 0, and maxArea to 0
1.) nested for loop to traverse the matrix
2.) use a helper to count the size of each island encountered
3.) in the helper, set the spot on grid called to 0 (equivalent to calling it visited), incrememnt currArea, check if there are valid neighbors to recursively call countArea on
4.) if there is a 1 detected in the grid, call countArea on it
4b.) set maxArea to max between itself and currArea after counting the last island
4c.) reset currArea to 0 for next island
5.) return maxArea after going through all of grid
*/

var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let maxArea = 0;
    let currArea = 0;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) {
                countSize(row, col);
                maxArea = Math.max(currArea, maxArea);
                currArea = 0;
            }
        }
    }

    function countSize(row, col) {
        grid[row][col] = 0;
        currArea++;

        // up
        if (row+1 < m) {
            if (grid[row+1][col] === 1) {
                countSize(row+1, col);
            }
        }

        // down
        if (row-1 >= 0) {
            if (grid[row-1][col] === 1) {
                countSize(row-1, col);
            }
        }

        // left
        if (col-1 >= 0) {
            if (grid[row][col-1] === 1) {
                countSize(row, col-1);
            }
        }

        // right
        if (col+1 < n) {
            if (grid[row][col+1] === 1) {
                countSize(row, col+1);
            }
        }
    }

    return maxArea;
};
