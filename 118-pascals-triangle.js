/*

*/

/*
1.) create a res array
2.) iterate over the rows on numRows
3.) initialize an array for each row
4.) iterate for each element of the row and calculate what it's value is (1 if an edge of the row, sum of previous row, previous cell and previous row, same cell)
5.) return the res array
*/

var generate = function(numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        res.push(Array(i+1));

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                res[i][j] = 1;
            } else {
                res[i][j] = res[i - 1][j - 1] + res[i-1][j];
            }
        }
    }

    return res;
};
