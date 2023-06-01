/*
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

Example 1:

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Example 2:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
*/

/*
0.) make a res variable to hold the number of paths add to the target sum
1.) have a helper that checks if the current node's path makes for a sum equal to the target (recursively)
2.) have the dfs function that runs the helper on each node as it recursivley does a dfs on the tree
3.) run the dfs function on the root node with the target sum as arguments
4.) return the res
*/

var pathSum = function(root, targetSum) {
    let res = 0;

    const pathSumCheck = (root, targetSum) => {
        if (!root) return;

        targetSum -= root.val;

        if (targetSum === 0) {
            res++;
        }
        pathSumCheck(root.left, targetSum);
        pathSumCheck(root.right, targetSum);
    }

    const dfs = (root, tagetSum) => {
        if (!root) return 0;

        pathSumCheck(root, targetSum);
        dfs(root.left, targetSum);
        dfs(root.right, targetSum);
        return;
    }

    dfs(root, targetSum);
    return res;
};


/*
other method i don't fully understand... but it is faster O(n), O(logn) if tree is a BST
0.) if there isn't a root passed in, return 0
1.) make a default param counter hash table (initialize to '0' as first key with a value of 1)
2.) make a default param for previous which initializes to 0
3.) the current sum is the previous val plus the current node val
4.) increment the current sum key's value in the sum hash table or initialize it to 1 if it doesn't exist already
5.) some weird res stuff before recursively running on left and right children nodes...
6.) decrement the currSum key in the sum hash
7.) return the res
*/

var pathSum = function(root, targetSum, sumHash = { '0': 1 }, prevSum = 0) {
    if (!root) return 0;

    let currSum = prevSum + root.val;
    (sumHash[currSum]) ? sumHash[currSum]++ : sumHash[currSum] = 1;

    let res = (sumHash[currSum - targetSum] || 0) - !targetSum;

    res += pathSum(root.left, targetSum, sumHash, currSum) + pathSum(root.right, targetSum, sumHash, currSum);

    sumHash[currSum]--;

    return res;
};
