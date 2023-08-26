/*
You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.

Example 1:

Input: pairs = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4].

Example 2:

Input: pairs = [[1,2],[7,8],[4,5]]
Output: 3
Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].
*/

/*
greedy O(nlog(n)) approach
1.) sort by second element of each pair
2.) set a curr to negative infinity and the res to 0
3.) iterate over all sorted pairs
4.) if the curr value is less than the first element of the current pair, increment res and set curr to the second element of that pair
5.) return res after iteration completes
*/

var findLongestChain = function(pairs) {
    pairs.sort((a,b) => a[1]-b[1]);

    let curr = -Infinity;
    let res = 0;

    for (let pair of pairs) {
        if (curr < pair[0]) {
            curr = pair[1];
            res += 1;
        }
    }

    return res;
};
