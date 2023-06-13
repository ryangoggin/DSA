/*
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:


Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
*/

/*
slow brute force O(n^2) where n is # of rows/columns
0.) have a res variable instantiated at 0
1.) map the joined rows to the grid in a rows variable
2.) do the same for joined cols with a col variable
3.) iterate through all row/col combos w/ nested for loop O(n^2)
4.) increment res if row and col strings are ===
5.) return res
*/

var equalPairs = function(grid) {
    let res = 0;
    let rows = grid.map(arr => arr.join())
    let cols = grid[0].map((col, i) => grid.map(row => row[i]).join())

    for (let row of rows) {
        for (let col of cols) {
            if (row === col) {
                res++;
            }
        }
    }

    return res;
};
