// see py file for thought process

var addDigits = function(num) {
    if (num < 10) return num;

    let digits = num.toString().split("");

    let res = 0;

    for (let digit of digits) res += parseInt(digit);

    return addDigits(res);
};
