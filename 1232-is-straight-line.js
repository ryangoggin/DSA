/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
*/

/*
1.) check if the line is vertical
1a.) get the 1st coords x coord and set a matchingX variable to 0
1b.) iterate through coords and incrememnt matchingX every time x matches the first coords x
1c.) after iterating return true if matchingX is the length of coords b/c that means they all have the same x and are a vertically straight line
2.) next calculate slope (rise/run) between first 2 coords
3.) iterate from 2nd coord to 2nd to last coord and calculate slope between current coord and next coord
4.) if any of the slopes don't match, return false
5.) return true if the loop completes w/o returning false becasue all slopes match
*/

var checkStraightLine = function(coordinates) {
    let x = coordinates[0][0];
    let matchingX = 0;

    for (let coordinate of coordinates) {
        if (coordinate[0] === x) matchingX++;
    }

    if (matchingX === coordinates.length) return true;

    let coord1 = coordinates[0];
    let coord2 = coordinates[1];

    let slope = (coord2[1] - coord1[1])/(coord2[0] - coord1[0]);

    for (let i = 1; i < coordinates.length - 1; i++) {
        let coord1 = coordinates[i];
        let coord2 = coordinates[i + 1];

        let currSlope = (coord2[1] - coord1[1])/(coord2[0] - coord1[0]);

        if (currSlope !== slope) return false;
    }

    return true;
};
