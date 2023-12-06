/*
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

Example 1:
Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

Example 2:
Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

Example 3:
Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
*/

/*
time - O(n) n is # days
space - O(1)

1.) iterate from 1 to n
2.) calculate daily deposit based off day of week i%7 and weeks (increment every time it's first day of week a.k.a. i%7 === 1) --> need to starty weeks at -1 to first increment goes to 0
3.) return res
*/

var totalMoney = function(n) {
    let res = 0;
    let weeks = -1;

    for (let i = 1; i <= n; i++) {
        if (i%7 === 1) weeks++;
        let deposit = (i%7 === 0) ? (7 + weeks) : ((i%7) + weeks);

        res += deposit;
    }

    return res;
};
