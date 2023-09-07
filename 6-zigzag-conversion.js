// see py file for thought process
// (slightly better on memory usage, uses strings instead of arrays in the object)

var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;

    const obj = {};
    let counter = 0;
    let decrement = false;

    for (let i=0; i < s.length; i++) {

        if (counter + 1 > numRows) decrement = true;

        if (counter === 1) decrement = false;

        if (decrement) counter--;
        else counter++;

        if (obj[counter]) {
            let previousValue = obj[counter];
            const updatedValue = previousValue += s[i];
            obj[counter] = updatedValue;
        } else {
            obj[counter] = s[i];
        }
    }

    let finalStr = '';

    for (let i=1; i<=numRows; i++) {
        finalStr += obj[i];
    }

    return finalStr;
};
