// see py file for thought process

var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let xDist = Math.abs(sx - fx);
    let yDist = Math.abs(sy - fy);
    let res;

    if (xDist === 0 && yDist === 0) {
        (t !== 1) ? res = true : res = false;
    } else {
        (xDist <= t && yDist <= t) ? res = true : res = false;
    }

    return res;
};
