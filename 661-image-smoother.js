/*
An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).
Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.

Example 1:
Input: img = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[0,0,0],[0,0,0],[0,0,0]]
Explanation:
For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0

Example 2:
Input: img = [[100,200,100],[200,50,200],[100,200,100]]
Output: [[137,141,137],[141,138,141],[137,141,137]]
Explanation:
For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
*/

/*
time- O(m*n)
space- O(m*n)

1.) make an m*n res array filled with *s or any other primitive
2.) create a helper that gets the smoothed value by summing the total in the 3x3 grid of the entered row/col and dividing by the total existing cells and putting that value in Math.floor
3.) iterate over img, set the corresponding element in res to the result of smoother helper on that row/col
4.) return res
*/

var imageSmoother = function(img) {
    let m = img.length;
    let n = img[0].length;
    let res = [];

    for (let i = 0; i < m; i++) {
        res.push(new Array(n).fill("*"));
    }

    function smoother(row, col) {
        let total = 0;
        let cells = 0;

        total += img[row][col];
        cells++;

        // top row
        if (row > 0) {
            total += img[row-1][col];
            cells++;

            if (col > 0) {
                total += img[row-1][col-1];
                cells++;
            }

            if (col < n-1) {
                total += img[row-1][col+1];
                cells++;
            }
        }

        // left
        if (col > 0) {
            total += img[row][col-1];
            cells++;
        }

        // right
        if (col < n-1) {
            total += img[row][col+1];
            cells++;
        }

        // bottom row
        if (row < m-1) {
            total += img[row+1][col];
            cells ++;

            if (col > 0) {
                total += img[row+1][col-1];
                cells++;
            }

            if (col < n-1) {
                total += img[row+1][col+1];
                cells++;
            }
        }

        return Math.floor(total/cells);
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            res[row][col] = smoother(row, col);
        }
    }

    return res;
};
