// return true if s can become goal after a number of shifts on s
// a shift is moving leftmost character to rightmost

/*
0.) convert s to an array to iterate
1.) iterate for every character in s
2.) shift and push on each iteration, check if s array converted to string is goal
3.) return true if it is, false if the loop exits
*/

var rotateString = function(s, goal) {
    let sArr = s.split("");

    for (let i = 0; i < sArr.length; i++) {
        let shift = sArr.shift();
        sArr.push(shift);
        if (sArr.join("") === goal) return true;
    }

    return false;
};
