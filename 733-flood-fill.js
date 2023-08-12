// see py file for thought process

var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image;

    colorNeighbor(image, sr, sc, image[sr][sc], color);
    return image;
};

function colorNeighbor(image, row, col, currCol, changeCol) {
    if (row < 0 || col < 0 || row >= image.length || col >= image[0].length) return;

    if (image[row][col] !== currCol) return;

    image[row][col] = changeCol;

    colorNeighbor(image, row+1, col, currCol, changeCol);
    colorNeighbor(image, row-1, col, currCol, changeCol);
    colorNeighbor(image, row, col+1, currCol, changeCol);
    colorNeighbor(image, row, col-1, currCol, changeCol);
}
