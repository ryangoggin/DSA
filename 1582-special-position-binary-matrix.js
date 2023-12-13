// see py file for thought process

var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0;

    function rowCheck(row, col) {
        for (let currCol = 0; currCol < n; currCol++) {
            if (mat[row][currCol] === 1 && currCol !== col) return false;
        }
        return true;
    }

    function colCheck(row, col) {
        for (let currRow = 0; currRow < m; currRow++) {
            if (mat[currRow][col] === 1 && currRow !== row) return false;
        }
        return true;
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 1) {
                if (rowCheck(row, col) && colCheck(row, col)) res++;
            }
        }
    }

    return res;
};
