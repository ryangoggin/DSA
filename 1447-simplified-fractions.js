/*
Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. You can return the answer in any order.

Example 1:

Input: n = 2
Output: ["1/2"]
Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.

Example 2:

Input: n = 3
Output: ["1/2","1/3","2/3"]

Example 3:

Input: n = 4
Output: ["1/2","1/3","1/4","2/3","3/4"]
Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".
*/

/*
O(nlog(n)) - where n is the passed in n
1.) if n is less than 2 there are no fractions, return an empty array
2.) create a res array and a set to hold all decimal values of passed in fractions to avoid duplicates
3.) iterate from 1 to n-1 for numerators, and for each numerator iterate from num+1 to n for denominators
4.) check if num divided by den is already in the decimals set, if not convert to a fraction as a string and push into res
5.) return the res array
*/

var simplifiedFractions = function(n) {
    if (n < 2) return [];

    let res = [];
    let decimals = new Set();

    for (let num = 1; num < n; num++) {
        for (let den = num + 1; den <= n; den++) {
            if (!decimals.has(num/den)) {
                let fraction = num.toString() + "/" + den.toString();
                res.push(fraction);
                decimals.add(num/den);
            }
        }
    }

    return res;
};
