// look at py file for problem

var isPerfectSquare = function(num) {
    let num1 = 0;
    let num2 = 1;

    while (num1 < num) {
        num1 += num2;
        num2 += 2;
    }

    return num1 === num;
};
