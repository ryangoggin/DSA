/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

// py method doesn't work in JS, 0 in array always returns true even if 0 isn't in the array...
// PSYCH, 3 months later it was the daily and used conditionals to match py method

var searchMatrix = function(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
        if (target <= matrix[row][matrix[row].length - 1]) {
            if (target !== 0) {
                return matrix[row].includes(target);
            } else {
                for (let i = 0; i < matrix[row].length; i++) {
                    if (matrix[row][i] === target) return true;
                }
                return false;
            }
        }
    }
    return false;
};

/*
1.) start at last element of first row
2.) iterate over the matrix while in a positive column and row that is less than the last row of the matrix
3.) if the current row, col element of the matrix is the target, return true
4.) if the current row, col element of the matrix is greater than the target, go back 1 column
5.) if the current row, col element of the matrix is less than the target, go to the next row
6.) return false if the loop exits becuase it isn't found in that case
*/

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
