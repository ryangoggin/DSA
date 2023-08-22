// see py file for thought process

var convertToTitle = function(columnNumber) {
    let result = "";
    while (columnNumber > 0) {
        columnNumber--;
        let charCode = 'A'.charCodeAt(0) + columnNumber % 26;
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};
