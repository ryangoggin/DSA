// see py file for thought process


function solve(board) {
    const m = board.length;
    const n = board[0].length;

    function borderDFS(row, col) {
        board[row][col] = "don't flip";

        // up
        if (row - 1 >= 0) {
            if (board[row - 1][col] === "O") {
                borderDFS(row - 1, col);
            }
        }

        // down
        if (row + 1 < m) {
            if (board[row + 1][col] === "O") {
                borderDFS(row + 1, col);
            }
        }

        // left
        if (col - 1 >= 0) {
            if (board[row][col - 1] === "O") {
                borderDFS(row, col - 1);
            }
        }

        // right
        if (col + 1 < n) {
            if (board[row][col + 1] === "O") {
                borderDFS(row, col + 1);
            }
        }
    }

    // top and bottom
    for (let col = 0; col < n; col++) {
        // top
        if (board[0][col] === "O") {
            borderDFS(0, col);
        }

        // bottom
        if (board[m - 1][col] === "O") {
            borderDFS(m - 1, col);
        }
    }

    // left and right
    for (let row = 0; row < m; row++) {
        // left
        if (board[row][0] === "O") {
            borderDFS(row, 0);
        }

        // right
        if (board[row][n - 1] === "O") {
            borderDFS(row, n - 1);
        }
    }

    // iterate over board and convert surrounded regions to "X"
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === "O") {
                board[row][col] = "X";
            }
        }
    }

    // convert "don't flip" regions back to "O"
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] === "don't flip") {
                board[row][col] = "O";
            }
        }
    }

    return board;
}
