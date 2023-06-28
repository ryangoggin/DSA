/*

*/

/*
1.) make an array for distances and array for the results
2.) iterate through each cell of the matrix and calculate its distance
3.) push the coordinates of the cell into the appropriate distance array of the distances array
4.) after populating the distances array, iterate over each array in the distances array and spread it into the res array
5.) return the res array
*/

var allCellsDistOrder = (rows, cols, rCenter, cCenter) => {
    const distances = [];
    const res = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let distance = Math.abs(row - rCenter) + Math.abs(col - cCenter);

            if (!distances[distance]) distances[distance] = [];
            distances[distance].push([row, col]);
        }
    }
    for (let distance of distances) {
        res.push(...distance);
    }
    return res;
    };
