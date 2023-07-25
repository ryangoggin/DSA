/*
You are given an m x n integer array grid where grid[i][j] could be:

1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Example 1:

Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths:
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:

Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths:
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:

Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
*/

/*
1.) nested for loops to get the starting point and count the amount of walkable tiles
2.) dfs helper that counts the current path length and increments the returned result each time a full unique path happens
2a.) if the passed in tile is a 2 and the count + 1 is the total walkable tiles, return a 1 so the fxn increments
2b.) if the passed in tile is out of bounds, return 0
2c.) if the passed in tile is a -1, or has already been visited return 0
2d.) temporarily mark the current tile as 'visited' while recursively calling in each direction of possible movements
2e.) after iterating, return the visited tile to its original value
3.) run the helper on the start point w/ a counter of 0
*/

var uniquePathsIII = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let movements = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    let walkable = 0;
    let startRow, startCol;

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            if(grid[row][col] === 1){
                startRow = row;
                startCol = col;
            }
            else if (grid[row][col] === 0){
                walkable++;
            }
        }
    }



    const dfs = (row, col, count) => {
        if(row >= m || col >= n || row < 0 || col < 0) return 0;
        if(grid[row][col] == -1 || grid[row][col] == 'visited') return 0;
        if(grid[row][col] == 2 && count == walkable+1) return 1;

        let res = 0;
        let tmp =  grid[row][col] ;
        grid[row][col] = 'visited';

        for(let [dx, dy] of movements) {
             let curRes   = dfs(row+dx, col+dy, count+1);
             res = curRes + res;
        }

        grid[row][col] = tmp;
        return res;
    }
    return dfs(startRow, startCol, 0);

};
