// see py file for thought process

var getRow = function(rowIndex) {
    let res = [1];
    let prev = 1;

    for (let i = 1; i <= rowIndex; i++) {
        let nextVal = Math.floor(prev * (rowIndex - i + 1) / i);
        res.push(nextVal);
        prev = nextVal;
    }

    return res;
};
