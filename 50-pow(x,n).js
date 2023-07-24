/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

/*
faster recursive taking advantage of even exponents
*/
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;
    } else if (n === -1) {
        return 1/x;
    } else if (n%2 === 0) {
        let tmp = myPow(x, n/2);
        return tmp*tmp
    } else {
        return (x * myPow(x, n-1));
    }
};

/*
recursive: exceeds max call stack size (291/306)... lol
1.) exponent helper, takes x, n, and res accumulation
2.) return res if n is 1
3.) if n is above 1, multiply res by x and recursively call w/ x, n-1, and res
4.) if n ix below 1, divide res by x and recursively call w/ x, n+1, and res
*/
var myPow = function(x, n) {
    function powHelper(x, n, res) {
        if (n === 1) return res;

        if (n > 1) {
            return powHelper(x, n-1, res*x);
        } else {
            return powHelper(x, n+1, res/x);
        }
    }

    return powHelper(x, n, x);
};

/*
brute force iteration (too slow, only gets 300/306):
1.) start res at 1
2.) positive exponent, loop 0 to n, multiply res by x each time
3.) negative exponent, loop n to 0, divide res by x each time
4.) 0 exponent, return 1
*/
var myPow = function(x, n) {
    let res = 1;

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            res *= x;
        }
    } else if (n < 0) {
        for (let i = n; i < 0; i++) {
            res /= x;
        }
    } else {
        return 1;
    }


    return res;
};
