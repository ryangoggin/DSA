// see py file for thought process

var updateMatrix = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    // first pass left to right, top to bottom
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] !== 0) {
                let top, left;
                if (row > 0) {
                    top = mat[row-1][col];
                } else {
                    top = Infinity;
                }

                if (col > 0) {
                    left = mat[row][col-1];
                } else {
                    left = Infinity;
                }

                mat[row][col] = Math.min(top, left)+1;
            }
        }
    }

    // second pass right to left and bottom to top
    for (let row = m-1; row >= 0; row--) {
        for (let col = n-1; col >= 0; col--) {
            if (mat[row][col] !== 0) {
                let right,bottom;
                if (col < n-1) {
                    right = mat[row][col+1];
                } else {
                    right = Infinity;
                }

                if (row < m-1) {
                    bottom = mat[row+1][col];
                } else {
                    bottom = Infinity;
                }

                mat[row][col] = Math.min(mat[row][col], Math.min(right, bottom)+1);
            }
        }
    }

    return mat;
};
