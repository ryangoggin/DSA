/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/*
Example 1:
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/*
1.) check rows: strip row of .s, put into a set, compare stripped length to size of set
2.) check columns: same method as rows, put each column value into a new array per column
3.) check 3x3s: same method as rows, put each 3x3 section into a new array
4.) if all checks pass return true
*/

// SLOW: O(n^2)
// space inefficient: O(n) (27 arrays of length 9)

var isValidSudoku = function(board) {
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    let col6 = [];
    let col7 = [];
    let col8 = [];
    let col9 = [];

    for (let row of board) {
        col1.push(row[0]);
        col2.push(row[1]);
        col3.push(row[2]);
        col4.push(row[3]);
        col5.push(row[4]);
        col6.push(row[5]);
        col7.push(row[6]);
        col8.push(row[7]);
        col9.push(row[8]);

        let strippedRow = row.filter((num) => num !== ".");
        let uniqueRow = new Set(strippedRow);
        if (strippedRow.length !== uniqueRow.size) return false;
    }

    let cols = [col1, col2, col3, col4, col5, col6, col7, col8, col9];

    for (let col of cols) {
        console.log(`col`, col);
        let strippedCol = col.filter((num) => num !== ".");
        let uniqueCol = new Set(strippedCol);
        if (strippedCol.length !== uniqueCol.size) return false;
    }

    let subBox1 = [];
    let subBox2 = [];
    let subBox3 = [];
    let subBox4 = [];
    let subBox5 = [];
    let subBox6 = [];
    let subBox7 = [];
    let subBox8 = [];
    let subBox9 = [];

    for (let i = 0; i < 3; i++) {
        subBox1.push(board[0][i], board[1][i], board[2][i]);
        subBox2.push(board[3][i], board[4][i], board[5][i]);
        subBox3.push(board[6][i], board[7][i], board[8][i]);
    }

    for (let i = 3; i < 6; i++) {
        subBox4.push(board[0][i], board[1][i], board[2][i]);
        subBox5.push(board[3][i], board[4][i], board[5][i]);
        subBox6.push(board[6][i], board[7][i], board[8][i]);
    }

    for (let i = 6; i < 9; i++) {
        subBox7.push(board[0][i], board[1][i], board[2][i]);
        subBox8.push(board[3][i], board[4][i], board[5][i]);
        subBox9.push(board[6][i], board[7][i], board[8][i]);
    }

    let subBoxes = [subBox1, subBox2, subBox3, subBox4, subBox5, subBox6, subBox7, subBox8, subBox9];

    for (let subBox of subBoxes) {
        console.log(`subBox`, subBox);
        let strippedSubBox = subBox.filter((num) => num !== ".");
        let uniqueSubBox = new Set(strippedSubBox);
        if (strippedSubBox.length !== uniqueSubBox.size) return false;
    }

    return true;

};
