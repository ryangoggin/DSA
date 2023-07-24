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
recursive:
1.) exponent helper, takes x, n, and res accumulation
2.) return res if n is 1
3.) if n is above 1, multiply res by x and recursively call w/ x, n-1, and res
4.) if n ix below 1, divide res by x and recursively call w/ x, n+1, and res
*/

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
