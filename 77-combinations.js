/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
*/

/*
iterative
*/

var combine = function(n, k) {
    let res = [];

    function generateCombs(first, k, currComb) {
        if (k === 0) {
            res.push([...currComb]);
            return
        }

        for (let i = first; i <= n; i++) {
            currComb.push(i);
            generateCombs(i+1, k-1, currComb);
            currComb.pop();
        }
    }

    generateCombs(1, k, []);
    return res
};

/*
backtracking
1.) have a res function to hold all combos
2.) have a backtrack helper function to get all the combos
3.) in the helper, only push current combinations that are of the desired length
4.) iterate from first value passed in to n
5.) each iteration push in i, recursively call on i incrememnted by 1, pop off last value in the array
6.) run the helper w/ 1 as the first and an empty array as the current combo
7.) return res
*/

var combine = function(n, k) {
    let res = [];

    function backtrack(first, currComb) {
        if (currComb.length === k) {
            res.push([...currComb]);
            return
        }

        for (let i = first; i <= n; i++) {
            currComb.push(i);
            backtrack(i+1, currComb);
            currComb.pop();
        }
    }

    backtrack(1, []);
    return res
};
