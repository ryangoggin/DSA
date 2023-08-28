// see py file for thought process

var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();

    let m = matrix.length;
    let n = matrix[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 0) {
                rows.add(row);
                cols.add(col);
            }
        }
    }

    for (let row of Array.from(rows)) {
        for (let col = 0; col < n; col++) {
            matrix[row][col] = 0;
        }
    }

    for (let col of Array.from(cols)) {
        for (let row = 0; row < m; row++) {
            matrix[row][col] = 0;
        }
    }

    return matrix;
};
