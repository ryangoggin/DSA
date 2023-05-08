// py method doesn't work in JS, 0 in array always returns true even if 0 isn't in the array...

// 1.) start at last element of first row
// 2.) iterate over the matrix while in a positive column and row that is less than the last row of the matrix
// 3.) if the current row, col element of the matrix is the target, return true
// 4.) if the current row, col element of the matrix is greater than the target, go back 1 column
// 5.) if the current row, col element of the matrix is less than the target, go to the next row
// 6.) return false if the loop exits becuase it isn't found in that case

var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[row].length - 1;

    while (col >= 0 && row < matrix.length) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else if (matrix[row][col] < target) row++;
    }

    return false;
};
